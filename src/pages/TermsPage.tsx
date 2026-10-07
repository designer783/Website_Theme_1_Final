import React from 'react';
import { ShieldCheck, FileText, Lock } from 'lucide-react';
import { SITE } from '../config/site';

export const TermsPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">Terms &amp; Conditions</h1>
          <p className="text-lg text-slate-600">Website terms of use</p>

          </div>

        <div className="bg-white p-6 sm:p-10 rounded-sm border border-slate-200 shadow-sm">
          <div className="prose prose-slate max-w-none text-slate-700 text-base leading-relaxed space-y-6">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`1. AGREEMENT`}
            </h2>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`Welcome to ${SITE.name}! The representations of our services and products available through this website do not constitute a binding offer. By clicking "SEARCH" or "SHOW ME MY REPORT" or "YES, CONTINUE TO MY REPORT," You agree to be bound to these Terms of Use (the"Agreement"), constituting a legally binding agreement by and between ${SITE.name}, (hereinafter, " ${SITE.name} " or "We" or "Our") and you (in either case, "You" or "Your") concerning Your use of ${SITE.name} website (the "Website") and the services available through the Website (the "Services"). We encourage you to print the Agreement or copy it to your computer's hard drive for your reference. With a customer's order, the customer submits a binding offer for the formation of a contract. Following the order, ${SITE.name} will process the customer's order and send a confirmation email to acknowledge the receipt of the customer's order. This acknowledgement of receipt does not constitute an acceptance of the order. The order is accepted with the provision of the requested goods or services. By proceeding to place an order, you are agreeing that you shall indemnify, defend and hold harmless ${SITE.name}, its officers, directors, employees and agents, and the entities that have contributed information to or provided services for our Website and/or Products against any and all direct or indirect losses, claims, demands, expenses (including attorneys' fees and cost) or liabilities of whatever nature or kind arising out of your use of our Website and/or Products and your use or distribution of any information obtained there. You will promptly notify us of any such claim. If you do not understand this agreement, or do not agree to be bound by it or the privacy policy, you may not access or use the website or services and you must immediately leave the website and cease using the services`}
            </p>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`2. PRIVACY POLICY`}
            </h2>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`${SITE.name} collects identifying and billing information including name, address, credit card information and e-mail address when consumers register for our services. Any personally identifiable information you provide to us including your email and phone number may be used to notify you of new products, product changes or offer discounts up to 50%. By providing your information, you may also recieve electronic communications, including SMS communications (for informational purposes only) or, email (for all permissible commercial purposes) from ${SITE.name} partner firms which may include third party marketing companies, affiliates, advertising agencies, and data aggregation companies regarding our or their services., You may opt-out of receiving electronic communications at any time by following the unsubscribe instructions contained in each communication, but you must contact the third-parties directly to do so.`}
            </p>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`3. CHANGES TO AGREEMENT AND PRIVACY POLICY`}
            </h2>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`Internet technology and the applicable laws, rules, and regulations change frequently. Accordingly, ${SITE.name} reserves the right to change this agreement and its privacy policy at any time upon notice to you, to be given by the posting of a new version or a change notice on the website. It is your responsibility to review this agreement and the privacy policy periodically. If at any time you find either unacceptable, you must immediately leave the website and cease using the services. Unless ${SITE.name} obtains your express consent, any revised privacy policy will apply only to information collected by ${SITE.name} after such time as the revised Privacy Policy takes effect, and not to information collected under any earlier Privacy Policies.`}
            </p>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`4. ELIGIBILITY`}
            </h2>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`By using the website or services, you represent and warrant that you are at least 18 years old and are otherwise legally qualified to enter into and form contracts under applicable law. Any individual using the Website or Services on behalf of a company further represents and warrants that they are authorized to act and enter into contracts on behalf of that company. This Agreement is void where prohibited.`}
            </p>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`5. ${SITE.name} ROLE`}
            </h2>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`Without limitation, you agree that ${SITE.name} is merely a technology solution that serves as a third-party platform and you use the Website and Services at Your own risk, without limitation and pursuant to Section: ASSUMPTION OF RISK; RELEASE. ${SITE.name} role is limited because ${SITE.name} is not directly involved in creating or storing the underlying information in our reports. ${SITE.name} does not necessarily prescreen the content and/or information provided to users. ${SITE.name} does not take or transfer ownership of items or liability attaching thereto. For additional information, please carefully review Section: DISCLAIMERS; LIMITATION OF LIABILITY.`}
            </p>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`6. LICENSE`}
            </h2>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`Unless otherwise stated, ${SITE.name} owns the intellectual property rights for all material on ${SITE.url}/. All intellectual property rights are reserved. You may view and/or print pages from ${SITE.name} for your own personal use subject to restrictions set in these terms and conditions. You must not:`}
            </p>
            <li className="ml-4 list-disc">
              {`— Republish material from ${SITE.url}/`}
            </li>
            <li className="ml-4 list-disc">
              {`— Sell, rent or sub-license material from ${SITE.url}/`}
            </li>
            <li className="ml-4 list-disc">
              {`— Reproduce, duplicate or copy material from ${SITE.url}/`}
            </li>
            <li className="ml-4 list-disc">
              {`— Redistribute content from ${SITE.name} (unless content is specifically made for redistribution).`}
            </li>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`7. NO RELIANCE ON THIRD PARTY CONTENT`}
            </h2>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`The information on the Website is provided for information purposes only. The Website and Services are provided only as a technology solution and shall not be liable for any delay or failure to make available the Report. ${SITE.name} does not:`}
            </p>
            <li className="ml-4 list-disc">
              {`— Guarantee the accuracy, completeness, or usefulness of any third-party information accessible on or through the Website;`}
            </li>
            <li className="ml-4 list-disc">
              {`— Adopt, endorse, or accept responsibility for the accuracy or reliability of any opinion, advice or statement made by a third party by means of the Website and Services. Under no circumstances will ${SITE.name} be responsible for any loss or damage resulting from your reliance on information or other content posted on the Website or transmitted to or by any third party.`}
            </li>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`${SITE.name} provides the reports to you "as is", and expressly disclaims all warranties, express or implied, including any implied warranties of merchantability or fitness for a particular purpose regarding the reports.`}
            </p>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`8. ASSUMPTION OF RISK; RELEASE`}
            </h2>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`You knowingly and freely assume all risk when using the website and services. You, on behalf of yourself, your personal representatives, and your heirs, hereby voluntarily agree to release, waive, discharge, hold harmless, defend, and indemnify ${SITE.name} and its stockholders, officers, directors, employees, agents, affiliates, consultants, representatives, sublicenses, successors, and assigns (collectively, the "${SITE.name} parties") from any and all claims, actions, or losses for bodily injury, property damage, wrongful death, emotional distress, loss of privacy, or other damages or harm, whether to you or to third parties, that may result from your use of the website and services.`}
            </p>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`9. USER INFORMATION; PASSWORD PROTECTION`}
            </h2>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`To access and/or use the Website and use the Services, You may be asked to provide certain registration details or other information. You represent and warrant that all user information you provide in connection with your use of the Website and Services will be current, complete, and accurate, and that you will update that information as necessary to maintain its completeness and accuracy. If ${SITE.name} believes in its sole discretion that the information you provide is not current, complete, or accurate, ${SITE.name} has the right to refuse your access to the Website and Services and/or to terminate or suspend your access at any time. You represent and warrant that you will not create a fake account. You may also be asked to provide a user name and a password in connection with your use of certain services. You are entirely responsible for maintaining the confidentiality of your password. You may not use the account, user name, or password of any other member at any time. You agree to notify ${SITE.name} immediately of any unauthorized use of your account, user name, or password. ${SITE.name} shall not be liable for any loss that you incur as a result of someone else using your password, either with or without your knowledge. You may be held liable for any losses incurred by ${SITE.name}, its affiliates, officers, directors, employees, consultants, agents, and representatives due to someone else's use of Your account or password.`}
            </p>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`10. RESERVED RIGHTS FOR ${SITE.name} FEES`}
            </h2>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(a) Reserved Rights for ${SITE.name} Fees`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`You acknowledge and agree that ${SITE.name} reserves the right to charge for access to the Website and use of the Services, in accordance with the ${SITE.name} Fees that are clearly disclosed throughout the Website. ${SITE.name} decision not to exercise any specific right or require performance of any specific obligation under this Agreement, including without limitation the collection of regularly recurring fees from you, shall not affect ${SITE.name} subsequent ability to exercise such right or require such performance at any time thereafter. Nor shall ${SITE.name} waiver of your breach constitute ${SITE.name} waiver of any subsequent breach by you or any other user of the Website and/or Services. By using the Website and/or Services, You authorize ${SITE.name}, and/or its payment processor, to charge ${SITE.name} fees to the credit card, debit card, or other payment method you provide. ${SITE.name} prohibits resale of ${SITE.name} or packages or sharing accounts with other users, the website management reserves the right to terminate the user’s account in this case.`}
            </p>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(b) ${SITE.name} Fees: Offer Details`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`We offer two different packages.`}
            </p>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`Our $25.00 Single Report - You will receive your report for $25.00. Our customer service phone is ${SITE.phone}`}
            </p>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`OR`}
            </p>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`Our Premium Package of 25 Reports redeemable at any time for $100.00 - With your Premium package you will receive access to 25 ${SITE.name} reports at a discounted rate redeemable at any time.`}
            </p>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(c) Refund Policy`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`If you are unhappy with your search results and would like a refund, please contact our customer support they will be happy to immediately issue you a 100% refund, a 20% handling fee will be applied. You can cancel anytime by contacting support at ${SITE.phone} or visting our contact page.`}
            </p>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`11. THIRD-PARTY WEBSITES`}
            </h2>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`The Website is linked with the websites of third parties ("Third-Party Websites"), some of whom may have established relationships with ${SITE.name} and some of whom may not. ${SITE.name} does not have control over the content and performance of ThirdParty Websites. ${SITE.name} has not reviewed, and cannot review or control, all of the material, including computer software or other goods or services, made available on or through third-party websites. Accordingly, ${SITE.name} does not represent, warrant, or endorse any third-party website, or the accuracy, currency, content, fitness, lawfulness, or quality of the information, material, goods, or services available through third-party websites. ${SITE.name} disclaims, and you agree to assume, all responsibility and liability for any damages or other harm, whether to you or to third parties, resulting from your use of thirdparty websites`}
            </p>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`12. PROHIBITED USES`}
            </h2>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`${SITE.name} imposes certain restrictions on your use of the Website and the Services. You represent and warrant that you will not: (a) "stalk" or otherwise harass any person, or contact any person who has requested not to be contacted; (b) provide false, misleading or inaccurate information to ${SITE.name} or any other member; (c) impersonate, or otherwise misrepresent affiliation, connection or association with, any person or entity; (d) while, using the Website and Services, use "ad blocking" software or similar built-in web browser options designed to hide, block or prevent the proper display of online advertising; (e) modify or change the placement and location of any advertisement appearing on the Website; (f) harvest or otherwise collect information about ${SITE.name} users, including email addresses and phone numbers; (g) use or attempt to use any engine, software, tool, agent, or other device or mechanism (including without limitation browsers, spiders, robots, avatars, or intelligent agents) to harvest or otherwise collect information from the Website for any use, including without limitation use on third-party websites; (h) access content or data not intended for You, or log onto a server or account that You are not authorized to access; (i) attempt to probe, scan, or test the vulnerability of the Services, the Website, or any associated system or network, or breach security or authentication measures without proper authorization; (j) interfere or attempt to interfere with the use of the Website or Services by any other user, host, or network, including, without limitation by means of submitting a virus, overloading, "flooding," "spamming," "mail bombing," or "crashing"; (k) use the Website or Services to send unsolicited e-mail, including without limitation promotions or advertisements for products or services; (l) forge any TCP/IP packet header or any part of the header information in any e-mail or in any uploading or posting to, or transmission, display, performance or distribution by means of, the Website or Services; or (m) attempt to modify, reverse-engineer, decompile, disassemble, or otherwise reduce or attempt to reduce to a human-perceivable form any of the source code used by the ${SITE.name} Parties in providing the Website or Services. Any violation of this section may subject You to civil and/or criminal liability.`}
            </p>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`13. INTELLECTUAL PROPERTY`}
            </h2>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(a) Compliance with Law`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`You represent and warrant that, when using the Website and Services, You will obey the law and respect the intellectual property rights of others. Your use of the Website and Services is at all times governed by and subject to laws regarding copyright ownership and use of intellectual property generally. You agree not to upload, post, transmit, display, perform, or distribute any content, information or other materials in violation of any third party’s copyrights, trademarks, or other intellectual property or proprietary rights. You hereby represent and warrant that you are the sole and exclusive owner of any user content that you submit to the website. You shall be solely responsible for any violations of any laws and for any infringements of third-party rights caused by your use of the website and services.`}
            </p>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`Company bears the sole burden of proving that content, information or other materials do not violate any laws or third-party rights.`}
            </p>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(b) Trademarks`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`${SITE.name} and the «${SITE.name} logo" (collectively, the " ${SITE.name} Marks") are trademarks or registered trademarks of ${SITE.name}. Other trademarks, service marks, graphics, logos, and domain names appearing on the Website may be the trademarks of third parties. Neither Your use of the Website and Services nor this Agreement grant You any right, title or interest in or to, or any license to reproduce or otherwise use, the ${SITE.name} Marks or any third-party trademarks, service marks, graphics, logos, or domain names. You agree that any goodwill in the ${SITE.name} Marks generated as a result of Your use of the Website and Services will inure to the benefit of ${SITE.name}, and You agree to assign, and hereby do assign, all such goodwill to ${SITE.name}. You shall not at any time, nor shall you assist others to, challenge ${SITE.name} right, title, interest in or to, or the validity of, the ${SITE.name} Marks.`}
            </p>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(c) Copyrighted Materials; Copyright Notice`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`All content and other materials available through the Website and Services, including without limitation the ${SITE.name} logo, design, text, graphics, and other files, and the selection, arrangement, and organization thereof, are either owned by ${SITE.name} or are the property of ${SITE.name} licensors and suppliers. Except as explicitly provided, neither Your use of the Website and Services nor this Agreement grant You any right, title, or interest in or to any such materials.`}
            </p>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(d) DMCA Policy`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`As ${SITE.name} asks others to respect ${SITE.name} intellectual property rights, ${SITE.name} respects the intellectual property rights of others. If you believe content located on or linked-to by the Website violates your copyright, you are encouraged to please immediately notify ${SITE.name} by means of emailed notice ("Infringement Notice"), providing the information described herein. If ${SITE.name} takes action in response to an Infringement Notice, it will make a good faith attempt to contact the party that made such content available by means of the most recent email address, if any, provided by such party to ${SITE.name}. Please be advised that you may be held liable for damages based on certain material misrepresentations contained in an Infringement Notice. Thus, if you are not sure content located on or linked-to by the Website infringes your copyright, you should consider first contacting an attorney.`}
            </p>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`All Infringement Notices should include the following:`}
            </p>
            <li className="ml-4 list-disc">
              {`— A signature, electronic or physical, of the copyright owner or a person authorized to act on their behalf;`}
            </li>
            <li className="ml-4 list-disc">
              {`— An identification of the copyright claimed to have been infringed;`}
            </li>
            <li className="ml-4 list-disc">
              {`— A description of the nature and location of the material that you claim to infringe your copyright, in sufficient detail to permit ${SITE.name} to find and positively identify that material;`}
            </li>
            <li className="ml-4 list-disc">
              {`— Your name, address, telephone number and email address; and a statement by you:`}
            </li>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(i) that you believe in good faith that the use of the material that you claim to infringe your copyright is not authorized by law, or by the copyright owner or such owner's agent; and,`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`(ii) under penalty of perjury, that all of the information contained in your Infringement Notice is accurate, and that you are either the copyright owner or a person authorized to act on their behalf. Infringement Notices should be sent to [] at [] with the subject line "DMCA Notice [INSERT YOUR NAME OR YOUR COMPANY'S NAME]". ${SITE.name} will respond to all such notices, including as required or appropriate by removing the offending material or disabling all links to the offending material.`}
            </p>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`14. DISCLAIMERS; LIMITATION OF LIABILITY`}
            </h2>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(a) NO WARRANTIES.`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`This site is provided by ${SITE.name} on an "as is" and "as available" basis. ${SITE.name} does not specifically warrant or guarantee the accuracy of its search reports. The information contained in our reports represents the lien records and data of the national database providers on or before the date and time indicated on the report. ${SITE.name} makes no representations or warranties regarding any liens or security interests filed after the date and time indicated on the report. In addition, ${SITE.name} specifically disclaims any liability for the criminal or fraudulent acts of third parties. ${SITE.name} makes no warranties or representations as to the turnaround time of its search reports. ${SITE.name} is not responsible for any damages, direct, consequential, punitive or otherwise, that you may suffer as a result of an unusual delay in the transmission of our reports. by accepting this license to use our website you also agree that, as a condition of any payment to you, your successors or assigns, by ${SITE.name} as part of its guarantee of the accuracy of its reports, you, your successors and assigns will subrogate any and all rights that you may have against any party that caused the lien or security interest to be filed.`}
            </p>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`Further, to the maximum extent permitted by law, ${SITE.name}, on behalf of itself and its licensors and suppliers, hereby expressly disclaims any and all warranties, express or implied, regarding the website, arising by operation of law or otherwise, including without limitation any and all implied warranties of merchantability, fitness for a particular purpose, non-infringement, no encumbrance, or title, in addition to any warranties arising from a course of dealing, usage, or trade practice. Neither ${SITE.name} nor its licensors or suppliers warrant that the website or the services will meet your requirements, or that the operation of the website or the services will be uninterrupted or error-free. the liability of ${SITE.name} for damages arising out of the furnishing of services pursuant to this agreement, including without limitation, mistakes, omissions, interruptions, delays, tortious conduct, errors, or other defects, representations, or arising out of the failure to the furnish services, whether caused by acts of commission or omission, or any other damage occurring, shall be limited to the maximum extent permitted by law. ${SITE.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages (including without limitation damages for lost profits or lost revenues), whether caused by the acts or omissions of ${SITE.name}, ${SITE.name} parties, or ${SITE.name} users, or their agents or representatives.`}
            </p>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(b) YOUR RESPONSIBILITY FOR LOSS OR DAMAGE; BACKUP OF DATA`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`You agree that your use of the website and services is at your sole risk. you will not hold ${SITE.name} or its licensors and suppliers, as applicable, responsible for any loss or damage that results from your access to or use of the website, including without limitation any loss or damage to any of your computers or`}
            </p>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`Data. the information and services may contain bugs, errors, problems, or other limitations.`}
            </p>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`Importantly, you hereby acknowledge that a catastrophic disk failure or other event could result in the loss of all of the data related to your account. you agree and understand that it is your responsibility to back up your data to your personal computer or external storage device and to ensure such backups are secure.`}
            </p>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(c) LIMITATION OF LIABILITY`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`The liability of ${SITE.name} and its licensors and suppliers is limited to the maximum extent permitted by law. in no event shall ${SITE.name} or its licensors or suppliers be liable for special, incidental, or consequential damages, lost profits, lost data or confidential or other information, loss of privacy, costs of procurement of substitute goods or services, failure to meet any duty including without limitation of good faith or of reasonable care, negligence, or otherwise, regardless of the foreseeability of those damages or of any advice or notice given to ${SITE.name} or its licensors and suppliers arising out of or in connection with your use of the website or services. This limitation shall apply regardless of whether the damages arise out of breach of contract, tort, or any other legal theory or form of action. Additionally, the maximum liability of ${SITE.name} and its licensors and suppliers to you under all circumstances shall be $50.00. You agree that this limitation of liability represents a reasonable allocation of risk and is a fundamental element of the basis of the bargain between ${SITE.name} and you. The website and services would not be provided without such limitations.`}
            </p>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(d) APPLICATION`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`The above disclaimers, waivers and limitations do not in any way limit any other disclaimer of warranties or any other limitation of liability in any other agreement between you and ${SITE.name} or between you and any of ${SITE.name} licensors and suppliers. Some jurisdictions may not allow the exclusion of certain implied warranties or the limitation of certain damages, so some of the above disclaimers, waivers, and limitations of liability may not apply to you. Unless limited or modified by applicable law, the foregoing disclaimers, waivers and limitations shall apply to the maximum extent permitted, even if any remedy fails its essential purpose. ${SITE.name} licensors and suppliers are intended third-party beneficiaries of these disclaimers, waivers, and limitations. No advice or information, whether oral or written, obtained by you through the website or otherwise shall alter any of the disclaimers or limitations stated in this section.`}
            </p>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`15. YOUR REPRESENTATIONS AND WARRANTIES`}
            </h2>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`You represent and warrant that your use of the Website and Services will be in accordance with this Agreement and any other ${SITE.name} policies, and with any applicable laws or regulations.`}
            </p>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`16. INDEMNITY BY YOU`}
            </h2>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`Without limiting any indemnification provision of this Agreement, You (the "Indemnitor") agree to defend, indemnify and hold harmless ${SITE.name} and the ${SITE.name} Parties (collectively, the "Indemnities") from and against any and all claims, actions, demands, causes of action, and other proceedings (collectively, "Claims"), including but not limited to legal costs and fees, and providing sole and exclusive control of the defense of any action to ${SITE.name}, including the choice of legal counsel and all related settlement negotiations, arising out of or relating to: (i) the relationship between You and ${SITE.name}, whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory; (ii) Your breach of this Agreement, including without limitation any representation or warranty contained in this Agreement; (iii) Your access to or use of the Website or Services; (iv) Your provision to ${SITE.name} or any of the Indemnities of information or other data; or (v) Your violation or alleged violation of any foreign or domestic, international, federal, state, or local law or regulation; or (vi) Your violation or alleged violation of any third party's copyrights, trademarks, or other intellectual property or proprietary rights.`}
            </p>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`The Indemnities each have the individual right, but not the obligation, to participate through counsel of their choice in any defense by You of any Claim as to which You are required to defend, indemnify, or hold harmless any, each, and/or all Indemnities. You may not settle any Claim without the prior written consent of the concerned Indemnified Parties.`}
            </p>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`17. GOVERNING LAW; JURISDICTION AND VENUE`}
            </h2>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(a) 1 year limitations period`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`Any cause of action by you arising out of or relating to the website, services, or this agreement must be instituted within one (1) year after the cause of action arose or be forever waived and barred. All actions shall be subject to the limitations set forth in above.`}
            </p>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(b) Binding Arbitration`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`If you and ${SITE.name} cannot resolve a Claim through negotiations, either party may elect to have the Claim finally and exclusively resolved by binding arbitration. Any election to arbitrate by one party shall be final and binding on the other(s). You hereby acknowledge that without this provision, you would have the right to sue in court with a jury trial or to participate in a class action. The language in this Agreement shall be interpreted in accordance with its fair meaning and not strictly for or against either party.`}
            </p>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association ("AAA"), as modified by this Agreement, available at the AAA website www.adr.org or by calling the AAA at 1-800-778-7879. Except as otherwise provided for herein, ${SITE.name} will pay the AAA filing, administration, and arbitrator fees. If, however, the arbitrator finds that either the substance of your claim or the relief sought is frivolous or brought for an improper purpose (as measured by the standards set forth in Federal Rule of Civil Procedures 11(b)), then the payment of all such fees will be governed by the AAA Rules. In that case, you hereby agree to reimburse ${SITE.name} for all payments disbursed that are your obligation to reimbursed under the AAA Rules. If you are unable to pay the arbitration fee, ${SITE.name} will pay it directly upon receiving a written request and a sworn statement that you are unable to pay. The arbitrator is bound by the terms of this Agreement. All issues are for the arbitrator to resolve, except that issues relating to the enforceability of the arbitration provision for a Court of Competent Jurisdiction to resolve. The arbitration may be conducted in person, through document submission, through telephone, or online. The arbitrator will issue a decision in writing, but need only provide a statement of reasons if requested by a party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. ${SITE.name} may litigate to compel arbitration in court, to stay proceedings pending arbitration, or to modify, confirm, vacate, or enter judgment on the award entered by the arbitrator.`}
            </p>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(c) Restrictions against Joinder of Claims`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`You and ${SITE.name} agree that any arbitration shall be limited to each claim individually. You and ${SITE.name} hereby agree that each may only bring claims against the other in your or ${SITE.name} individual capacity and not as a plaintiff or class member in any purported class or representative proceeding. if this specific provision is found to be unenforceable, then, to the full extent allowable under applicable law, (1) no arbitration shall be joined with any other arbitration, and (2) there is no right for any claim to be arbitrated on a class-action basis or to employ class action procedures, and (3) there is no right of authority for any dispute to be brought in a purported representative capacity on behalf either of the general public or any other individuals.`}
            </p>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(d) Remedies in Aid of Arbitration; Equitable Relief`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`This agreement to arbitrate will not preclude you or ${SITE.name} from seeking provisional remedies in aid of arbitration, including without limitation orders to stay a court action, compel arbitration or confirm an arbitral award, from a Court of Competent Jurisdiction. Furthermore, this agreement to arbitrate will not preclude you or ${SITE.name} from applying to a court of competent jurisdiction for a temporary restraining order, preliminary injunction, or other interim or conservatory relief, as necessary. As used herein, "Court of Competent Jurisdiction" means any federal or state court that has jurisdiction over the subject matter.`}
            </p>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`18. TERMINATION`}
            </h2>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(a) BY ${SITE.name}`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`without limiting any other provision of this agreement, ${SITE.name} reserves the right to, in ${SITE.name} sole discretion and without notice or liability, deny use of the website and/or services to any person for any reason or for no reason at all, including without limitation for any breach or suspected breach of any representation, warranty, or covenant contained in this agreement, or of any applicable law or regulation.`}
            </p>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(b) AUTOMATIC TERMINATION UPON BREACH BY YOU`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`This Agreement shall automatically terminate in the event that You breach any of this Agreement's representations, warranties, or covenants. Such termination shall be automatic, and shall not require any action by ${SITE.name}.`}
            </p>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(c) BY YOU`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`You may terminate this Agreement and Your rights hereunder at any time, for any or no reason at all, by providing to ${SITE.name} notice of Your intention to do so, in the manner required by this Agreement.`}
            </p>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(d) EFFECT OF TERMINATION`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`Any termination of this Agreement automatically terminates all rights and licenses granted to you under this Agreement, including all rights to use the Website and Services. Upon termination, ${SITE.name} may, but has no obligation to, in ${SITE.name} sole discretion, rescind any services and/or delete from ${SITE.name} systems all Your Personal Information and any other files or information that You made available to ${SITE.name} or that otherwise relate to Your use of the Website or Services. Upon termination, you shall cease any use of the Website and Services. Subsequent to termination, ${SITE.name} reserves the right to exercise whatever means it deems necessary to prevent your unauthorized use of the Website and Services, including without limitation technological barriers such as IP blocking and direct contact with Your Internet Service Provider.`}
            </p>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(e) LEGAL ACTION`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`If ${SITE.name}, in ${SITE.name} discretion, takes legal action against you in connection with any actual or suspected breach of this Agreement, ${SITE.name} will be entitled to recover from you as part of such legal action, and You agree to pay, ${SITE.name} reasonable costs and attorney's fees incurred as a result of such legal action. The ${SITE.name} Parties will have no legal obligation or other liability to You or to any third party arising out of or relating to any termination of this Agreement.`}
            </p>
            <h4 className="text-base font-semibold text-slate-800 mt-4 mb-2">
              {`(f) SURVIVAL`}
            </h4>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`Upon termination, all rights and obligations created by this Agreement will terminate, except that Sections 1, 2, 4-9, and 12-23 will survive any termination of this Agreement.`}
            </p>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`19. NOTICES`}
            </h2>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`All notices required or permitted to be given under this Agreement must be in writing. ${SITE.name} shall give any notice by email sent to the most recent email address, if any, provided by the intended recipient to ${SITE.name}. You agree that any notice received from ${SITE.name} electronically satisfies any legal requirement that such notice be in writing. You bear the sole responsibility of ensuring that your email address on file with ${SITE.name} is accurate and current, and notice to you shall be deemed effective upon the sending by ${SITE.name} of an email to that address.`}
            </p>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`20. PARTIAL INVALIDITY`}
            </h2>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`Should any part of this Agreement be declared invalid, void, or unenforceable by a Court of Competent Jurisdiction, such decision shall not affect the validity of any remaining portion hereof, which shall remain in full force and effect, and the parties hereby acknowledge and agree that they would have executed the remaining portion hereof without including the part so declared by a Court of Competent Jurisdiction, to be invalid, void, or unenforceable.`}
            </p>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mt-8 mb-4">
              {`21. GENERAL`}
            </h2>
            <p className="mb-3 text-slate-700 leading-relaxed">
              {`This Agreement constitutes the entire agreement between ${SITE.name} and You concerning your use of the Website and Services. This Agreement may only be modified by a written amendment signed by an authorized executive of ${SITE.name} story or by the unilateral amendment of this Agreement by ${SITE.name} and by the posting by ${SITE.name} of such amended version. A waiver by either party of any term or condition of this Agreement or any breach thereof, in any one instance, will not waive such term or condition or any subsequent breach thereof. This Agreement and all of your rights and obligations hereunder will not be assignable or transferable by you without the prior written consent of ${SITE.name}. This Agreement will be binding upon and will inure to the benefit of the parties, their successors, and permitted assigns. You and ${SITE.name} are independent contractors, and no agency, partnership, joint venture, or employeeemployer relationship is intended or created by this Agreement. Except for the ${SITE.name} Parties and the Indemnified Parties as and to the extent set forth in Sections 8, 14, 16a, 18, 20e, and 23 and in this paragraph, and ${SITE.name} licensors and suppliers as to the extent expressly stated in this Agreement, there are no third-party beneficiaries to this Agreement. You acknowledge and agree that any actual or threatened breach of this Agreement or infringement of proprietary or other third-party rights by you would cause irreparable injury to ${SITE.name} and ${SITE.name} licensors and suppliers, and would therefore entitle ${SITE.name} or ${SITE.name} licensors or suppliers, as the case may be, to injunctive relief. The headings in this Agreement are for the purpose of convenience only and shall not limit, enlarge, or affect any of the covenants, terms, conditions or provisions of this Agreement.`}
            </p>
        </div>
        </div>
      </div>
    </div>
  );
};
