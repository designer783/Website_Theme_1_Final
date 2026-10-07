const fs = require('fs');

let c = fs.readFileSync('src/components/VinLookupBox.tsx', 'utf8');

if (!c.includes('ALL_COUNTRY_CODES')) {
  c = c.replace(
    "import { SITE } from '../config/site';",
    "import { SITE } from '../config/site';\nimport { ALL_COUNTRY_CODES } from '../data/countries';\nimport { useEffect } from 'react';"
  );
}

// remove the hardcoded COUNTRY_CODES inside VinLookupBox
c = c.replace(
  /const COUNTRY_CODES = \[.*?\];/s,
  ''
);

// find `const [phoneCountryCode, setPhoneCountryCode] = useState('+1');`
c = c.replace(
  "const [phoneCountryCode, setPhoneCountryCode] = useState('+1');",
  "const [phoneCountryCode, setPhoneCountryCode] = useState('+1');\n  const [selectedState, setSelectedState] = useState('');\n"
);

// Inside the component after useState
const useEffectBlock = `
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data && data.country_calling_code) {
          setPhoneCountryCode(data.country_calling_code);
        }
        if (data && data.region_code) {
          setSelectedState(data.region_code);
        }
      })
      .catch(err => console.error('Location detection failed', err));
  }, []);
`;

if (!c.includes("fetch('https://ipapi.co/json/')")) {
  c = c.replace(
    "const [phone, setPhone] = useState('');",
    "const [phone, setPhone] = useState('');\n" + useEffectBlock
  );
}

// Find `<select\n                  value={phoneCountryCode}\n                  onChange={(e) => setPhoneCountryCode(e.target.value)}`
// wait, let's just replace `COUNTRY_CODES.map` with `ALL_COUNTRY_CODES.map`
c = c.replace(/COUNTRY_CODES\.map/g, 'ALL_COUNTRY_CODES.map');

// Add onChange and value for the state dropdown if it exists
c = c.replace(
  /id="plate-state"[\s\S]*?className="(.*?)"/g,
  'id="plate-state"\n                        value={selectedState}\n                        onChange={(e) => setSelectedState(e.target.value)}\n                        className="$1"'
);

fs.writeFileSync('src/components/VinLookupBox.tsx', c);
