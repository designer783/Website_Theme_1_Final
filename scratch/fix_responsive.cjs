const fs = require('fs');
let c = fs.readFileSync('src/components/VehicleStorytelling.tsx', 'utf8');

c = c.replace(
  /<div className="relative w-full overflow-x-auto overflow-y-hidden bg-slate-100 group scrollbar-thin scrollbar-thumb-slate-300" style={{ minHeight: '420px' }}>/g,
  '<div className="relative w-full overflow-hidden bg-slate-100 group min-h-[280px] sm:min-h-[420px] flex items-center justify-center">'
);

c = c.replace(
  /className="w-full h-full object-cover sm:object-contain object-left-top sm:object-center transition-transform duration-700 group-hover:scale-\[1\.02\]"\s*style={{ maxHeight: '520px', minHeight: '420px' }}/g,
  'className="w-full h-auto max-h-[520px] object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"'
);

fs.writeFileSync('src/components/VehicleStorytelling.tsx', c);
