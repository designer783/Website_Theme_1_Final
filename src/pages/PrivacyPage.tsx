import React from 'react';
import { SITE } from '../config/site';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-lg text-slate-600">
            EFFECTIVE DATE: 08-06-2019
          </p>
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-sm border border-slate-200 shadow-sm">
        <div className="prose prose-slate max-w-none text-slate-700 text-base leading-relaxed space-y-6">
          <p className="mb-3 text-slate-700 leading-relaxed">
            Thank you for visiting the {SITE.name} website located at <a href={`${SITE.url}/`} className="text-blue-600 underline">{SITE.url}/</a>. The Site is an Internet property of our company and its affiliated companies ("{SITE.name} TM," "we" or "us"). This notice outlines the privacy policies associated with the Site. By visiting this Site, you are accepting the practices described in this privacy policy ("Privacy Policy"). This Privacy Policy covers our treatment of Personal Information (as defined hereinbelow) that we collect when you: (a) submit an application to open a {SITE.name} account ("Account"); and/or (b) purchase products or services offered on the Site (collectively, "{SITE.name} Products"). It is important that visitors are fully informed about the use of their Personal Information. We believe in 100% permission-based marketing. No personal information will be shared with any third parties without the customer's permission.
          </p>

          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
            Your IP Address
          </h2>
          <p className="mb-3 text-slate-700 leading-relaxed">
            Each time that you visit the Site, our web server automatically recognizes your IP address and the web page from which you came. Your IP address is used to help identify you and to gather broad demographic information about you. We also use your IP address to help diagnose problems with our servers, to administer the Site and to better serve you in using the products, services and other features associated with the Site.
          </p>

          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
            Cookies and Action Tags
          </h2>
          <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">Cookies:</h4>
          <p className="mb-3 text-slate-700 leading-relaxed">
            The first time that a user provides an e-mail address in connection with his/her activities at the Site, we assign an identification number to that e-mail address and deploy a cookie to the applicable user's PC. Whenever that user comes back to the Site using the same PC, the cookie allows the Site to identify the user and to recall the user's e-mail address. If, at any time, a user provides other information in connection with his/her activities on the Site (such as name, address, Vehicle History date, gender, etc.), we may store that information, along with the user's e-mail address, in our user database. We may use the information stored in our database: (a) to effectuate the purpose or transaction for which the information was originally provided by a user; (b) to pre-populate information fields in the event that user wishes to purchase products and/or services or sign up for and/or subscribe to services, promotions or other offers in the future; (c) to ensure that a user will not be repeatedly exposed to the same advertisements, offers and/or promotions while visiting the Site; and/or (d) to, in connection with regular communication with a user, include offers, promotions or advertisements that were historically, or are likely to be, of interest to that user. We also use cookies to anonymously track and target the interests of our users to further enhance the experience on the Site. To find out more about cookies, please visit www.cookiecentral.com.
          </p>

          <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">Action Tags, Web Beacons and other Data Collection Methods:</h4>
          <p className="mb-3 text-slate-700 leading-relaxed">
            An action tag or a web-beacon (also known as a clear gif or a pixel tag) is a method used to track responses or actions by visitors who view certain advertisements or other information on the Site. Action tags are 1x1 pixel images embedded in a website page that are used to transparently collect information. We may use action tags to count the number of times that visitors click on a particular banner ad or visit the pages of the Site and to provide information about what products/services are viewed or purchased. We reserve the right to retain this cookie and action tag data indefinitely. At no time will we share cookie-related, action-tag-related and/or generated information and/or data with third parties.
          </p>

          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
            Personal Information That We Collect From You
          </h2>
          <p className="mb-3 text-slate-700 leading-relaxed">
            By registering with, or providing personal information to, the Site, as well as providing permission to receive marketing offers, users allow us and our affiliates to make their personally identifiable information available to third parties in accordance with the terms of this Privacy Policy. While on the Site, we may collect "Personal Information" from you. For the purposes of this Privacy Policy, Personal Information shall mean individually identifiable information from or about an individual including, but not limited to:
          </p>
          <p className="mb-3 text-slate-700 leading-relaxed">
            a) your full name; (b) mailing address; (c) e-mail address; (d) phone number; (e) year of Vehicle History; (f) date of Vehicle History; and/or (g) any other information requested by us on the applicable registration form.
          </p>
          <p className="mb-3 text-slate-700 leading-relaxed">
            Featured on the Site ("Third Party Service Providers"), {SITE.name} will transfer your Personal Information (including your credit card information) to such Third Party Service Providers in order to complete the transaction requested on the Site.
          </p>
          <p className="mb-3 text-slate-700 leading-relaxed">
            We may also use your Personal Information for any promotion-related purpose, and/or marketing and survey purpose, on our own behalf and on behalf of our affiliates and subsidiaries. We may disclose Personal Information to third-party agents and independent contractors that help us create and/or operate any promotions or surveys. You agree that we may contact you at any time with updates and/or any other information that we may deem appropriate for you to receive in connection with your continued use of the Site.
          </p>
          <p className="mb-3 text-slate-700 leading-relaxed">
            We are able to offer our {SITE.name} Products to you, in part, based on your willingness to be reached by our third-party advertisers. Your Personal Information (other than credit card information) will be shared with third-party advertisers. We also use contact information from your Personal Information to send you information about us, our {SITE.name} Products, the Account program and to keep you informed of our other products and services that may be of interest to you and to contact you about your billing account status. Please keep in mind, though, that we do not control, and are not responsible for, the practices of our third-party advertisers and you must contact them directly to opt out of any future communications. If you wish to stop receiving future communications from us, or if you wish to prevent the transfer and/or sale of your Personal Information to third parties (subject to restrictions contained in applicable state and federal law), please see the Removal of Your Information/Opting Out section below.
          </p>
          <p className="mb-3 text-slate-700 leading-relaxed">
            By submitting your Personal Information at the Site, you agree to receive e-mail marketing from {SITE.name} (including other company properties) and our third-party advertisers. In addition, you agree that such act constitutes a purchase, an inquiry and/or an application for purposes of the Amended Telemarketing Sales Rule, 16 CFR 310 et seq. (the "ATSR"). With respect to the ATSR, and notwithstanding that your telephone number may be listed on the Federal Trade Commission's Do-Not-Call List, we retain the right to contact you via telemarketing in accordance with the terms of the ATSR.
          </p>
          <p className="mb-3 text-slate-700 leading-relaxed">
            In addition, by submitting your Personal Information at the Site, you agree to receive SMS-based informational messages from us or our Third-Party Service Providers. As such, notwithstanding that your mobile telephone number may be listed on state and/or federal Do-Not-Call registries, we retain the right to contact you via SMS based messages in accordance with applicable state and federal law.
          </p>
          <p className="mb-3 text-slate-700 leading-relaxed">
            We reserve the right to release current or past Personal Information: (a) in the event that we believe that the Site, the {SITE.name} Products and/or the Account program is/are being or has/have been used in violation of this Privacy Policy, the Terms and Conditions or to commit unlawful acts; (b) if the information is subpoenaed or otherwise requested pursuant to a valid legal proceeding; or (c) if {SITE.name} is sold or acquired. Moreover, you hereby consent to the disclosure of any record or communication to any third-party when we, in our sole discretion, determine the disclosure to be appropriate including, without limitation, sharing your e-mail address with other third-parties for suppression purposes in compliance with the CAN-SPAM Act of 2003, as amended from time to time. Users should also be aware that courts of equity, such as U.S. Bankruptcy Courts, might have the authority under certain circumstances to permit Personal Information to be shared or transferred to third parties without permission.
          </p>
          <p className="mb-3 text-slate-700 leading-relaxed">
            If you subscribe to or purchase one of our {SITE.name} Products or enroll in the Account program, we may use your Personal Information to send you a welcoming email that may confirm your user name and password. If you "opt-in," we may send you electronic newsletters, contact you about our {SITE.name} Products and other products, services, information and news that may be of interest to you, and provide you with targeted feedback. In addition, if you identify yourself to us by sending us an email with questions or comments, we may use such information (including Personal Information) to respond to your questions or comments, and we may file your questions or comments for future reference. We may also supplement the information we collect with information from other sources to assist us in evaluating and improving the Site and {SITE.name} Products, to determine your preferences so that we can tailor the Site and {SITE.name} Products to your needs.
          </p>

          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
            How We Use Demographic Information and Aggregate Data
          </h2>
          <p className="mb-3 text-slate-700 leading-relaxed">
            We use demographic information to tailor the Site to the interests of our users. Demographic information is shared with third party advertisers so that they can tailor their advertisements to the appropriate audience. Demographic information may also be shared with other third parties. We reserve the right to provide aggregate or group data about our users for lawful purposes. Aggregate or group data is data that describes the demographics, usage or characteristics of our participants as a group, without disclosing personally identifiable information. By opening an account with us, you agree to allow us to provide such aggregate data to third parties. By agreeing to the terms of this Privacy Policy, you hereby consent to the disclosure of any record or communication to any third party when we, in our sole discretion, determine the disclosure to be appropriate.
          </p>
          <p className="mb-3 text-slate-700 leading-relaxed">
            We may also use the non-personally identifiable information gathered on the Site to perform statistical analysis of user behavior, to analyze and evaluate issues relating to our {SITE.name} Products and/or the Account program. We may link some of this non-personally identifiable information to Personal Information for purposes such as understanding the characteristics of people who use the Site, to improve and market the Site in general and our {SITE.name} Products in particular.
          </p>

          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
            Other Websites
          </h2>
          <p className="mb-3 text-slate-700 leading-relaxed">
            We provide users with the option to opt-out from receiving information sent via electronic mailings on behalf of third party advertisers. Users may unsubscribe from receiving e-mail at any time by following the instructions contained at the end of every e-mailing. Unsubscribe requests can only be processed if you have registered with us in the first instance. If you have not registered with us and wish to opt out of receiving e-mail from a particular sender, please consult that sender's opt out policies or contact that sender.
          </p>
          <p className="mb-3 text-slate-700 leading-relaxed">
            Information sent on behalf of third party advertisers is prepared several days in advance, so users may continue to receive e-mail from us for up to ten (10) days following the unsubscribe procedures detailed above. If, after that point, a user is still receiving e-mail from us, the user should contact us at <a href={SITE.emailHref} className="text-blue-600 underline">{SITE.email}</a>.
          </p>

          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
            No Liability for Unauthorized Changes
          </h2>
          <p className="mb-3 text-slate-700 leading-relaxed uppercase font-semibold">
            IN NO EVENT SHALL WE BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM YOUR USE OF THE SITE OR FOR THE UNAUTHORIZED MODIFICATION OF TEXT OR ADVERTISEMENTS PROVIDED BY US, OUR MARKETING PARTNERS OR ANY OTHER THIRD PARTIES.
          </p>

          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
            Your Acceptance of These Terms
          </h2>
          <p className="mb-3 text-slate-700 leading-relaxed">
            By using this Site and/or the {SITE.name} Products, you agree to the terms of our Privacy Policy. We reserve the right, at our discretion, to change, modify, add and/or remove portions of this Privacy Policy at any time. All Privacy Policy changes will take effect immediately upon their posting on the Site. Please check this page periodically for changes. Your continued use of the Site, {SITE.name} Products and/or acceptance of our e-mail following the posting of changes to these terms will mean that you accept these changes and agree to continue receiving e-mail from us. If you do not agree to the terms of this Privacy Policy, please unsubscribe by <a href={`${SITE.url}/contact`} className="text-blue-600 underline">Clicking Here</a> (CONTACT US PAGE). Contacting Us about Privacy Questions or Concerns. If you have any questions about this Privacy Policy, the practices of the Site or your dealings with the Site, please e-mail us at <a href={SITE.emailHref} className="text-blue-600 underline">{SITE.email}</a>.
          </p>
          <p className="mb-3 text-slate-700 leading-relaxed">
            This Site may contain links to other third-party owned and/or operated websites including, without limitation, the websites of {SITE.name} Third Party Service Providers. {SITE.name} is not responsible for the privacy practices or the content of such websites. In some cases, you may be able to make a purchase through one of these third-party websites. In these instances, you may be required to provide certain information, such as a credit card number, to register or complete a transaction at such website. These third-party websites have separate privacy and data collection practices and {SITE.name} has no responsibility or liability relating to them.
          </p>

          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
            Our Security Precautions
          </h2>
          <p className="mb-3 text-slate-700 leading-relaxed">
            We endeavor to safeguard and protect our user's information. The privacy of your Personal Information is very important to us. The servers that we store personally identifiable information in are kept in a secure physical environment. We have security measures in place to protect the loss, misuse and alteration of Personal Information under our control. When our registration/application process asks users to enter sensitive information (such as credit card information), and when we store and transmit such sensitive information, that information is encrypted and is protected with SSL encryption software. While we use SSL encryption to protect sensitive information online, we also do everything in our power to protect user all information off-line and online. Unfortunately, no data transmission over the Internet can be guaranteed to be 100% secure. As a result, while we strive to protect your Personal Information, we cannot ensure or warrant the security of any information that you transmit to us, and you do so at your own risk.
          </p>
          <p className="mb-3 text-slate-700 leading-relaxed">
            However, access to your information is strictly limited, and not accessible to the public. All of our users' information is restricted in our offices. Only employees who need the information to perform a specific job are granted access to Personal Information. Our employees are dedicated to ensuring the security and privacy of all user information. Employees not adhering to our firm policies are subject to disciplinary action. In compliance with applicable federal and state laws, we shall notify you and any applicable regulatory agencies in the event that we learn of an information security breach with respect to your Personal Information. You will be notified via e-mail in the event of such a breach. Please be advised that notice may be delayed in order to address the needs of law enforcement, determine the scope of network damage, and to engage in remedial measures.
          </p>

          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
            Minors
          </h2>
          <p className="mb-3 text-slate-700 leading-relaxed">
            No information should be submitted to, or posted at, the Site by visitors under eighteen (18) years of age. Persons eighteen (18) years of age and younger are not permitted to access the Site and we do not knowingly collect Personal Information from such individuals. We encourage parents and guardians to spend time online with their children and to participate and monitor the interactive activities of their children.
          </p>

          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
            Removal of Your Information/Opting Out
          </h2>
          <p className="mb-3 text-slate-700 leading-relaxed">
            At your request, we will remove Personal Information that you have provided to us. You may do so by e-mailing us at <a href={SITE.emailHref} className="text-blue-600 underline">{SITE.email}</a>. However, deleting your Personal Information, or otherwise opting-out of receipt of communications from us or third parties, will only change or delete the data in our database for purposes of transacting future business on the Site and for managing future communications from us and third parties. These deletions will not change or delete Personal Information already collected as part of a particular transaction in our database, which may have already been shared with third parties, all as provided above in this Privacy Policy. You will need to contact third parties who may contact you directly to change your preferences or your Personal Information that they may be using to contact you.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};
