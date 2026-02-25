import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const TermsAndCondition = () => {
  const { t, i18n } = useTranslation();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const currentLang = i18n.language;
    const direction = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
    document.documentElement.setAttribute("lang", currentLang);
  }, [i18n.language]);

  return (
    <>
      <div className="privacy-bg from-top">
        <Header />

        <div className="heading-policy">
          <h1>{t("terms_conditions")}</h1>
        </div>
      </div>

      <div className="container my-5">
        <div className="page" title="Page 1">
          <div className="layoutArea">
            <div className="column">
              <p
                style={{
                  color: "rgb(15, 71, 97)",
                  fontFamily: "AptosDisplay",
                  fontSize: "20pt",
                }}
              >
                Introduction
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                These Terms of Use &amp; Service (“<strong>Terms</strong>”) are
                part of a legally binding agreement between Users (“
                <strong>you</strong>”, “<strong>your</strong>”) and myGuide
                Platform (“<strong>we</strong>”, “<strong>us</strong>”, “
                <strong>our</strong>”). Please refer to the ‘Definitions’
                section in Part 1, below, for the meaning of any capitalised
                terms (including ‘Users’ and ‘myGuide Platform’) used in these
                Terms.
              </p>
              <p
                style={{
                  fontFamily: "Aptos",
                  fontSize: "12pt",
                  fontWeight: "bold",
                }}
              >
                IMPORTANT: PLEASE READ THESE TERMS CAREFULLY BEFORE USING THE
                myGuide PLATFORM.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                By accessing or using the myGuide Platform, you acknowledge
                that you have read, understood, and agreed to be bound by these
                Terms.{" "}
                <strong>
                  If you do not accept these Terms, you are not permitted to
                  access or use the myGuide Platform.
                </strong>
              </p>
              <p
                style={{
                  fontFamily: "Aptos",
                  fontSize: "12pt",
                  fontWeight: "bold",
                }}
              >
                Structure of These Terms
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                These Terms consist of two main sections:
                <br />
                1. <strong>Part 1 – General Terms</strong>
                <br />
                2. <strong>Part 2 – Product and Service-Specific Terms</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                Additionally, certain{" "}
                <strong>myGuide Platform Products and Services</strong> may
                have supplemental terms (e.g., event policies, loyalty programs,
                promotions, etc.). These additional terms will be provided to
                you when applicable and will form part of your agreement with
                myGuide.{" "}
                <strong>
                  In case of any conflict, supplemental terms will take
                  precedence over these general Terms.
                </strong>
              </p>
              <p
                style={{
                  fontFamily: "Aptos",
                  fontSize: "12pt",
                  fontWeight: "bold",
                }}
              >
                Updates to the Terms
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                myGuide reserves the right to modify these Terms at any time.
                Changes will take effect once the updated Terms are posted on
                the myGuide Platform or otherwise communicated to you.{" "}
                <strong>
                  Your continued use of the myGuide Platform after any updates
                  constitutes acceptance of the revised Terms.
                </strong>
              </p>
              <p
                style={{
                  fontFamily: "Aptos",
                  fontSize: "12pt",
                  fontWeight: "bold",
                }}
              >
                PART 1 – GENERAL TERMS Definitions
              </p>
              <ol style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <li>
                  <strong>Account</strong> – A registered profile created by a
                  User to access and use the myGuide Platform and its Products
                  &amp; Services.
                </li>
                <li>
                  <strong>Affiliate</strong> – Any entity that directly or
                  indirectly controls, is controlled by, or is under common
                  control with myGuide Platform.
                </li>
                <li>
                  <strong>Benefits</strong> – Perks offered to Users subscribed
                  to <strong>myGuidePlus</strong> (subject to change).
                </li>
                <li>
                  <strong>Partner</strong> – An independent contractor providing
                  meals, groceries, or other goods/services via the myGuide
                  Platform.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="page" title="Page 2">
          <div className="layoutArea">
            <div className="column">
              <ol start={5}>
                <li>
                  <strong>"myGuidePlatform"</strong> – The digital marketplace
                  operated by myGuide Platform and its Affiliates, including
                  its website (
                  <span style={{ color: "rgb(70%,120%,135%)" }}>
                    www.myGuide.qa
                  </span>
                  ) and mobile apps.
                </li>
                <li>
                  <strong>"myGuideBike"</strong> – A bike rental service
                  provided by myGuide Platform (details in{" "}
                  <strong>Part 2</strong>).
                </li>
                <li>
                  <strong>"myGuideBundle"</strong> – A packaged offering of
                  myGuide services.
                </li>
                <li>
                  <strong>"myGuidee-Wallet"</strong> – A prepaid digital
                  balance (in local currency) linked to your Account.
                </li>
                <li>
                  <strong>"myGuideFee"</strong> – Fees applicable to orders on
                  the myGuide Platform (excluding <strong>Charges</strong>).
                </li>
                <li>
                  <strong>"myGuide Pay"</strong> – The payment service
                  available through the myGuide Platform (details in{" "}
                  <strong>Part 2</strong>).
                </li>
                <li>
                  <strong>"myGuide Platform Products & Services"</strong> –
                  Products/services provided directly by myGuide via the
                  Platform.
                </li>
                <li>
                  <strong>"Charges"</strong> – Costs payable by Users for
                  Products & Services ordered through the Platform.
                </li>
                <li>
                  <strong>"Competition"</strong> – Any contest, giveaway, or
                  promotional activity run by myGuide.
                </li>
                <li>
                  <strong>"Competition Winner"</strong> – A User who wins a
                  myGuide Competition.
                </li>
                <li>
                  <strong>"Content"</strong> – Text, images, videos, audio,
                  software, or other data on the Platform.
                </li>
                <li>
                  <strong>"Dispute"</strong> – Any disagreement related to the
                  use of the Platform or its Products & Services.
                </li>
                <li>
                  <strong>"Entrant"</strong> – A participant in a myGuide
                  Competition.
                </li>
                <li>
                  <strong>"Food"</strong> – Meal-related products/services
                  provided by myGuide (details in <strong>Part 2</strong>).
                </li>
                <li>
                  <strong>"Loss" / "Losses"</strong> – Any damages, liabilities,
                  costs, or expenses incurred.
                </li>
                <li>
                  <strong>"Order"</strong> – A User’s request to purchase
                  goods/services from myGuide or its Partners.
                </li>
                <li>
                  <strong>"Off-App Merchants"</strong> – Third-party sellers not
                  operating through the myGuide Platform.
                </li>
                <li>
                  <strong>"Prize"</strong> – Rewards given to Competition
                  Winners.
                </li>
                <li>
                  <strong>"Participating Organisation"</strong> –
                  Government/NGO/charity partners collaborating with myGuide.
                </li>
                <li>
                  <strong>"Partner Products & Services"</strong> –
                  Goods/services offered by Third Parties (not myGuide) via
                  the Platform.
                </li>
                <li>
                  <strong>"Products & Services"</strong> – All offerings
                  available on the myGuide Platform.
                </li>
                <li>
                  <strong>"Promo Code"</strong> – Alphanumeric codes issued for
                  promotional discounts.
                </li>
                <li>
                  <strong>"Service Promotion"</strong> – Temporary promotional
                  offers on the Platform.
                </li>
                <li>
                  <strong>"Third Party"</strong> – Any individual/entity other
                  than myGuide or the User (includes Partners, other Users,
                  etc.).
                </li>
              </ol>

              <p>
                <strong>29. "Users"</strong> – Individuals accessing or using
                the myGuide Platform.
              </p>

              <h3>1. myGuide Platform</h3>
              <p>
                The myGuide Platform operates as a digital marketplace,
                enabling Users to browse and order various Products and
                Services.
              </p>

              <h4>License Grant</h4>
              <p>
                Provided you comply with these Terms, myGuide grants you a{" "}
                <strong>
                  limited, revocable, non-exclusive, non-transferable, and
                  non-sublicensable
                </strong>{" "}
                license to:
              </p>
              <ol>
                <li>
                  <strong>Access & Use</strong> – Install and use the myGuide
                  Platform on your personal device solely for its intended
                  purposes.
                </li>
                <li>
                  <strong>Content Usage</strong> – View and interact with any
                  Content owned or licensed by myGuide Platform, strictly for{" "}
                  <strong>non-commercial, personal use</strong>.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="page" title="Page 3">
          <div className="layoutArea">
            <div className="column">
              <p>
                No other rights are granted beyond what is explicitly stated
                here. All rights not expressly provided in these Terms are{" "}
                <strong>reserved by myGuide and its licensors</strong>.
              </p>
              <h4>Ownership & Restrictions</h4>
              <ul>
                <li>
                  The myGuide Platform, including all intellectual property
                  rights, remains the <strong>exclusive property</strong> of
                  myGuide platform or its licensors.
                </li>
                <li>
                  Your use of the Platform <strong>does not grant you</strong>{" "}
                  any ownership or additional rights, including:
                  <ul>
                    <li>
                      Any rights to the myGuide Platform beyond the limited
                      license above.
                    </li>
                    <li>
                      Any right to use myGuide’s trademarks, logos, brand
                      names, or service marks (or those of its licensors)
                      without explicit permission.
                    </li>
                  </ul>
                </li>
              </ul>
              <p>
                By accessing the Platform, you acknowledge that your rights are
                strictly defined by these Terms.
              </p>

              <h4>2. User Account</h4>
              <p>
                To use the myGuide Platform, every user must create a personal
                account. Each individual is allowed only one account unless
                granted special written permission by myGuide Platform. The
                platform is strictly for users who are at least 18 years old and
                legally capable of entering binding contracts. If you don't meet
                these requirements, you must stop using the platform
                immediately.
              </p>
              <p>
                When registering, you'll need to provide accurate personal
                information including your full name, address, and mobile
                number. Additional details may be required later for certain
                services. It's your responsibility to keep all account
                information current and correct. Failure to do so may result in
                restricted access, inability to manage your preferences, or even
                account termination.
              </p>
              <p>
                You must protect your account credentials and never share them
                with others. Unauthorized account sharing or transfers are
                strictly prohibited. You're fully responsible for all activities
                conducted through your account, even if unauthorized. myGuide
                will consider any account activity as being performed by you,
                and won't be liable for any unauthorized access or related
                losses.
              </p>
              <p>
                If you suspect any security breach, unauthorized access, or lose
                your device, you must notify myGuide immediately. The company
                reserves the right to terminate any account that violates these
                terms or appears suspicious without prior notice.
              </p>

              <h4>3. Use of myGuide Platform and/or Products and Services</h4>
              <h5>Identity Verification Requirement</h5>
              <p>
                myGuide Platform reserves the right to require valid proof of
                identity for access to certain Platform features or Services.
                Your refusal or inability to provide satisfactory verification
                may result in denial of access to such Services or the Platform
                in its entirety.
              </p>

              <h5>Authorized Use Restrictions</h5>
              <p>
                The Platform and associated Services may only be utilized for
                their intended purposes as determined by myGuide Platform. All
                users shall comply with applicable laws, statutes, ordinances,
                and regulations governing Platform use. Any unauthorized,
                unlawful, or non-compliant use constitutes a material breach of
                these Terms.
              </p>
            </div>
          </div>

          <div className="layoutArea" title="Page 4">
            <div className="column">
              <h4>Prohibited Conduct</h4>
              <ol>
                <li>
                  Misrepresentation of identity or impersonation of any third
                  party
                </li>
                <li>
                  Harassment, threats, stalking, or weapons possession through
                  Platform use
                </li>
                <li>Violation of any applicable laws or regulations</li>
                <li>
                  Disruption of Platform operations or connected network
                  infrastructure
                </li>
                <li>
                  Transmission of false, defamatory, obscene, or otherwise
                  objectionable content
                </li>
                <li>
                  Facilitation of illegal activities including narcotics
                  distribution
                </li>
                <li>
                  Infringement of third-party intellectual property rights
                </li>
                <li>Dissemination of malicious software or code</li>
                <li>Unauthorized data interception or system access</li>
                <li>
                  Manipulation of technical protocols to conceal information
                  origins
                </li>
                <li>Unauthorized framing or mirroring of Platform content</li>
                <li>
                  Reverse engineering or decompilation of Platform components
                </li>
                <li>
                  Commercial exploitation or unauthorized redistribution of
                  Services
                </li>
                <li>Automated data scraping or unauthorized indexing</li>
                <li>Unapproved external linking or redirection</li>
                <li>Account transfer or credential sharing</li>
                <li>
                  Discrimination or harassment based on protected
                  characteristics
                </li>
                <li>
                  Any action causing nuisance, property damage, or safety
                  concerns
                </li>
              </ol>

              <h5>Compliance Obligations</h5>
              <p>
                Users shall adhere to all published acceptable use policies and
                subsequent instructions issued by myGuide Platform. Violations
                may result in immediate account suspension or termination at
                myGuide's sole discretion, without prejudice to any other
                available remedies.
              </p>

              <h4>
                4. Suspension or Removal of myGuide Platform and/or Your
                Account
              </h4>
              <h5>Service Availability Disclaimer</h5>
              <p>
                myGuide Platform does not warrant the continuous,
                uninterrupted availability or functionality of the Platform or
                any Content contained therein. We reserve the unilateral right
                to suspend, withdraw, or restrict access to all or any portion
                of the Platform and its Content at any time, without liability,
                for business or operational reasons. While reasonable notice
                will be provided where practicable, such notice shall not be
                construed as mandatory.
              </p>

              <h5>Account Termination Rights</h5>
              <p>
                myGuide Platform expressly reserves the right to:
                <br />
                (a) Suspend or permanently deactivate User Accounts;
                <br />
                (b) Revoke access privileges to the Platform;
              </p>
              <p>
                at its sole discretion, without liability, with or without
                cause, and with or without prior notice.
                <strong> Remedial Actions for Terms Violations</strong>
                <br />
                In cases of User non-compliance with these Terms, myGuide
                platform may institute any or all of the following measures:
                <br />
                (i) Immediate temporary or permanent suspension of Account
                privileges and Platform access;
              </p>
            </div>
          </div>
        </div>
        <div className="page" title="Page 5">
          <div className="layoutArea">
            <div className="column">
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                (ii) Initiation of legal proceedings to recover damages,
                including but not limited to:
              </p>
              <ul>
                <li>Actual incurred losses</li>
                <li>Reasonable administrative expenses</li>
                <li>Legal costs and fees</li>
              </ul>

              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                (iii) Referral of relevant information to law enforcement
                agencies when deemed necessary;
                <br />
                (iv) Removal of any User-generated Content from the Platform,
                either temporarily or permanently.{" "}
                <strong>No Liability Clause</strong>
              </p>

              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                myGuide Platform shall bear no liability whatsoever for any
                consequences arising from:
              </p>

              <ul>
                <li>Service interruptions or discontinuations</li>
                <li>Account suspensions or terminations</li>
                <li>Content removals</li>
                <li>
                  <>
                    Any enforcement actions taken pursuant to these Terms
                    <br />
                    This provision shall survive termination of the User
                    Agreement and shall be interpreted broadly in favor of
                    myGuide Platform's enforcement rights.
                  </>
                </li>
              </ul>

              <p
                style={{
                  fontFamily: "Aptos",
                  fontSize: "12pt",
                  fontWeight: "bold",
                }}
              >
                5. Content and Third-Party Materials Policy
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                myGuide Platform reserves the right to modify, update, or
                remove any content on the Platform at any time without prior
                notice or liability...
              </p>
            </div>
          </div>

          <div className="page" title="Page 6">
            <div className="layoutArea">
              <div className="column">
                <p
                  style={{
                    fontFamily: "Aptos",
                    fontSize: "12pt",
                    fontWeight: "bold",
                  }}
                >
                  6. Products and Services
                </p>
                <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  The myGuide Platform offers two distinct categories of
                  products and services...
                </p>

                <p style={{ fontWeight: "bold" }}>
                  A. myGuide Platform Products and Services
                </p>
                <ol>
                  <li>
                    These are services directly provided by the myGuide
                    Platform, clearly identified as such in Part 2 of these
                    Terms...
                  </li>
                  <li>
                    Order Process:
                    <ul>
                      <li>
                        When placing an order, you are making a binding purchase
                        offer.
                      </li>
                      <li>
                        myGuide Platform may accept or reject your order.
                      </li>
                      <li>
                        Upon acceptance, a legally binding agreement is formed.
                        <br />
                        3. Order Modifications &amp; Cancellations:
                        <ul>
                          <li>
                            Once accepted, orders are binding and cannot be
                            modified/canceled without written consent.
                          </li>
                          <li>
                            Platform may cancel accepted orders under
                            exceptional circumstances and issue a full refund.
                          </li>
                          <li>
                            No additional liability will be incurred beyond this
                            refund.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>IMPORTANT ACKNOWLEDGMENTS:</strong>
                    <ul>
                      <li>
                        THE PLATFORM DOES NOT OWN TRANSPORTATION OR LOGISTICS
                        VEHICLES.
                      </li>
                      <li>SERVICES ARE PROVIDED BY THIRD-PARTY CONTRACTORS.</li>
                      <li>
                        NO EMPLOYMENT RELATIONSHIP EXISTS WITH THESE PROVIDERS.
                      </li>
                      <li>
                        THE RELATIONSHIP IS STRICTLY THAT OF
                        CONTRACTOR-SUBCONTRACTOR.
                        <br />
                        <strong>B. Partner Products and Services</strong>
                      </li>
                      <li>
                        All services not explicitly identified above are
                        classified as Partner Products and Services.
                      </li>
                      <li>Examples include:</li>
                      <ul>
                        <li>Food delivery</li>
                        <li>Flower delivery</li>
                        <li>Pharmacy products</li>
                        <li>Supermarket deliveries</li>
                        <li>
                          These are provided by third-party partners and
                          governed by separate terms between you and them.
                        </li>
                      </ul>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="page" title="Page 7">
          <div className="layoutArea">
            <div className="column">
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <i>
                    <strong>
                      Part 2 of these Terms explains the circumstances in which
                      certain Products and Services will be Partner Products and
                      Services, rather than myGuide Products and Services.
                    </strong>
                  </i>
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  While myGuide Platform strives to facilitate positive user
                  experience when ordering Partner Products and Services, it
                  serves solely as an intermediary between Users and Partners,
                  managing the transactional process only. Users expressly
                  acknowledge and agree that:
                </span>
              </p>
              <ol style={{ listStyleType: "decimal" }}>
                <li style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      <strong>NoQualityAssurance</strong>
                    </span>
                  </p>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      myGuide Platform does not verify, endorse, or guarantee
                      (i) the quality, safety, or suitability of any
                    </span>
                  </p>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      Partner Products and Services, or (ii) the reliability,
                      qualifications, or conduct of any Partner.
                    </span>
                  </p>
                </li>
                <li style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      <strong>SeparatePartnerAgreements</strong>
                    </span>
                  </p>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      All Partner Products and Services are provided directly by
                      Partners, and their provision is governed exclusively by
                      separate terms between Users and the respective Partner.
                      myGuide Platform is not a party to such agreements.
                    </span>
                  </p>
                </li>
                <li style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    <strong>UserAssumptionofRisk</strong>
                  </span>
                  <br />
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Users order Partner Products and Services at their own risk.
                    Neither myGuide Platform nor its Affiliates make any
                    representations, warranties, or guarantees regarding Partner
                    offerings, and expressly disclaim all liability related to:
                  </span>
                </li>
              </ol>
              <p>
                <span style={{ fontFamily: "Courier New", fontSize: "10pt" }}>
                  o{" "}
                </span>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  Any acts, omissions, or breaches by Partners;
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Courier New", fontSize: "10pt" }}>
                  o{" "}
                </span>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  Losses arising from viewing, ordering, purchasing, or using
                  Partner Products and Services. 4.{" "}
                  <strong>ServiceAvailability</strong>
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  myGuide Platform does not guarantee the continuous
                  availability of any Products or Services listed on the
                  platform. It reserves the unilateral right to modify, suspend,
                  or discontinue offerings at any time, without liability or
                  prior notice, for any operational or business reason.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <strong>7. Promotions</strong>
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  1. <strong>PromotionalOffers</strong>
                  <br />
                  myGuide Platform, at its sole discretion and potentially in
                  collaboration with Partners or third parties, may offer
                  various promotions to Users. Unless specifically extended to
                  you, such promotions shall not affect your contractual
                  relationship with the myGuide Platform or these Terms.
                  Promotions are typically distributed through promotional codes
                  ("Promo Codes").
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  2. <strong>PromotionEnforcementRights</strong>
                  <br />
                  myGuide Platform expressly reserves the right to:
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Courier New", fontSize: "10pt" }}>
                  o{" "}
                </span>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  Cancel or revoke any promotional credits or benefits
                </span>
                <br />
                <span style={{ fontFamily: "Courier New", fontSize: "10pt" }}>
                  o{" "}
                </span>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  Withdraw features obtained through promotions in cases where
                  myGuide Platform
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  reasonably suspects or determines that:
                </span>
                <br />
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  1. The promotion was used erroneously
                </span>
                <br />
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  2. Fraudulent or illegal activity occurred
                </span>
                <br />
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  3. Violations of promotion terms or these Terms took place
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  3. <strong>UserObligationsRegardingPromoCodes</strong>
                  <br />
                  By participating in promotions, you acknowledge and agree
                  that: a) Promo Codes must be:
                </span>
              </p>
            </div>
            <div className="column">
              <p>
                <span style={{ fontFamily: "Courier New", fontSize: "10pt" }}>
                  o{" "}
                </span>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  Used only for their intended purpose and audience
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="page" title="Page 8">
          <div className="layoutArea">
            <div className="column">
              <ul>
                <li>Utilized in full compliance with applicable laws</li>
                <li>
                  Promo Codes may not be:
                  <ul>
                    <li>
                      Copied, sold, or transferred without explicit
                      authorization
                    </li>
                    <li>Publicly distributed (including via online forums)</li>
                  </ul>
                </li>
                <li>
                  myGuide Platform may:
                  <ul>
                    <li>
                      Deactivate Promo Codes at any time without notice or
                      liability
                    </li>
                    <li>Set specific terms for each Promo Code's use</li>
                  </ul>
                </li>
                <li>
                  Additional conditions apply:
                  <ul>
                    <li>Promo Codes have no cash value</li>
                    <li>May expire before being redeemed</li>
                    <li>
                      Are subject to any additional terms set by myGuide
                      Platform
                    </li>
                  </ul>
                </li>
              </ul>

              <h3>8. Bundles</h3>
              <h4>Eligibility and Use Restrictions</h4>
              <p>
                Users may obtain:
                <ul>
                  <li>myGuide Credits ("Credits")</li>
                  <li>Service bundles ("Bundles")</li>
                  <li>Promotional offers ("Service Promotions")</li>
                </ul>
                for application toward qualifying Platform purchases. All such
                instruments remain the sole property of myGuide Technologies
                and:
              </p>
              <ul>
                <li>Shall be valid exclusively for Platform transactions</li>
                <li>Are non-transferable and carry no cash value</li>
                <li>
                  May be restricted to specific Products/Services as designated
                  by myGuide
                </li>
                <li>
                  Cannot be combined with other offers unless expressly
                  permitted
                </li>
              </ul>

              <h4>Payment Obligations</h4>
              <p>
                Where purchase costs exceed available Credit/Bundle/Promotion
                values, Users remain fully liable for all outstanding balances.
                Partial redemption shall not constitute satisfaction of payment
                obligations.
              </p>

              <h4>Modification Rights</h4>
              <p>myGuide Technologies reserves the unilateral right to:</p>
              <ul>
                <li>Impose additional restrictions on instrument use</li>
                <li>Modify or terminate any offer program</li>
                <li>
                  Adjust terms, conditions, or eligibility requirements; without
                  prior notice and without incurring liability to Users
                </li>
              </ul>

              <h4>Referral Incentives</h4>
              <p>
                Subject to Platform discretion, Users may participate in
                referral incentive programs whereby:
              </p>
              <ul>
                <li>
                  Compensation may be provided in Credit or Service Promotion
                  form
                </li>
                <li>
                  Program parameters (including reward values, qualification
                  criteria, and expiration terms) may be modified or
                  discontinued at any time
                </li>
                <li>
                  All incentive awards remain subject to the general
                  restrictions outlined in Section 8
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="page" title="Page 9">
          <div className="layoutArea">
            <div className="column">
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>9. Donations</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                As part of its commitment to supporting communities, myGuide
                Platform (“we”, “our”, or “us”) may, from time to time, make
                certain features available that allow users to direct their
                support to community-focused causes via the Platform. These
                features (“Support Features”) are offered at our discretion, may
                be updated, modified, or removed at any time without prior
                notice or liability, and their availability may vary by market
                or region.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                To facilitate these Support Features, we may partner with
                third-party entities (“Participating organizations”). Please
                note that myGuide Platform is <strong>not</strong> a
                registered charity and does not act in the capacity of a
                professional or commercial fundraiser, paid solicitor of
                charitable donations, or fiduciary. All aspects related to the
                management, receipt, and use of donations are the sole
                responsibility of the relevant Participating Organization, as
                identified on the Platform.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                Users may request to support Participating Organizations by
                donating through approved payment methods, including debit or
                credit cards, reward points accrued via our Loyalty Program, or
                available myGuide Credits.{" "}
                <strong>
                  All contributions made through these methods are final and
                  non-refundable. Limitation of Liability
                </strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                myGuide Platform and its affiliates provide the Support
                Features “as is” and disclaim any and all warranties, express or
                implied, including but not limited to warranties of
                merchantability, fitness for a particular purpose, and
                non-infringement. We make no representations or guarantees
                concerning the conduct of Participating Organizations or the
                ultimate use of funds. By using these features, you agree that
                neither the myGuide Platform nor its affiliates shall be held
                liable for any direct, indirect, incidental, special, or
                consequential damage or losses arising out of your participation
                in or use of the Support Features.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                Should a Participating Organization become ineligible or unable
                to receive funds before payment is made, we reserve the right,
                at our sole discretion and without notice, to reallocate the
                funds to another Participating Organization that aligns with a
                similar mission or objective.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>Use of Trademarks</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                All trademarks, service marks, logos, and brand identifiers
                appearing in connection with the Support Features are the
                property of their respective owners and are likely to be
                protected under intellectual property laws. You may not use,
                copy, or display these marks without the prior written consent
                of the respective trademark holders.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                By participating in the Support Features, you confirm your
                acceptance of these terms. These terms form part of and are
                governed by the Platform’s broader Terms and Conditions, which
                may be amended or updated from time to time. Continued use of
                the Platform following any updates shall constitute your
                agreement to such modifications.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>10. Payments, Fees, and Charges</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                When placing orders through the myGuide Platform, you agree to
                pay the following amounts, where applicable:
              </p>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Charges for Products and Services provided by myGuide
                    Platform;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Any applicable myGuide Platform Fees;
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="page" title="Page 10">
          <div className="layoutArea">
            <div className="column">
              <p style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                •{" "}
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  Charges for Partner Products and Services as offered by
                  third-party Partners.
                </span>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                All fees and charges are inclusive of applicable taxes (e.g.,
                VAT or sales tax) as required by law.{" "}
                <strong>Disclosure of Charges at Checkout</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                All applicable Charges and Platform Fees will be disclosed
                during the checkout process. These may be updated prior to order
                confirmation or delivery (for goods). Once an order is
                confirmed, pricing is fixed unless an obvious pricing error has
                occurred. In such a case, you will be notified and may either
                confirm the order at the correct price or cancel and receive a
                full refund.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>Accepted Payment Methods</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                Payments may be made using:
              </p>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Debit or credit cards; or
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Any alternative method offered at the time of placing your
                    order.
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    In certain instances, a temporary hold may be placed on your
                    card for an estimated amount. This pre-authorization does
                    not constitute a charge, and any unused amount will be
                    released promptly after the service is rendered.
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    <strong>Cash-on-Delivery Terms</strong>
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Where available and selected:
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    • Only cash will be accepted;
                    <br />
                    • You must provide the exact amount;
                    <br />• Captains are not required to carry sufficient change
                    and cannot deliver orders unless full payment is received.
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    <strong>Partner Payment Facilitation</strong>
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    For orders involving Partner Products and Services:
                  </p>
                </li>
              </ul>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    myGuide Platform may act as the Partner’s{" "}
                    <strong>limited payment collection agent</strong>;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Payment made to myGuide Platform is considered payment
                    made directly to the Partner;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    myGuide Platform may collect applicable Platform Fees
                    directly from you.
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    <strong>Finality of Payments and Refunds</strong>
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    All Charges and Platform Fees are{" "}
                    <strong>final and non-refundable</strong>, unless otherwise
                    determined by myGuide Platform or the Partner.
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Where applicable, refunds will be issued either:
                  </p>
                </li>
              </ul>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    As myGuide Credits; or
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Using your original payment method, at our discretion.
                  </span>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Refunds to cards typically take{" "}
                    <strong>7–15 business days</strong>, though delays may occur
                    due to external banking processes. myGuide Platform shall
                    not be held liable for any such delays beyond its control.
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    <strong>Failed Payments and Alternate Methods</strong>
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    If your selected payment method fails:
                  </p>
                </li>
              </ul>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    We may attempt to charge an alternate method saved to your
                    Account;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    You are responsible for all Charges and Fees incurred under
                    your Account.{" "}
                    <strong>
                      Post-Transaction Charges and Payment Method Restrictions
                    </strong>
                  </span>
                </li>
              </ul>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Restrict deletion of payment methods from your Account for
                    up to <strong>120 days</strong>;
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="page" title="Page 9">
          <div className="layoutArea">
            <div className="column">
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>9. Donations</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                As part of its commitment to supporting communities, myGuide
                Platform (“we”, “our”, or “us”) may, from time to time, make
                certain features available that allow users to direct their
                support to community-focused causes via the Platform. These
                features (“Support Features”) are offered at our discretion, may
                be updated, modified, or removed at any time without prior
                notice or liability, and their availability may vary by market
                or region.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                To facilitate these Support Features, we may partner with
                third-party entities (“Participating organizations”). Please
                note that myGuide Platform is <strong>not</strong> a
                registered charity and does not act in the capacity of a
                professional or commercial fundraiser, paid solicitor of
                charitable donations, or fiduciary. All aspects related to the
                management, receipt, and use of donations are the sole
                responsibility of the relevant Participating Organization, as
                identified on the Platform.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                Users may request to support Participating Organizations by
                donating through approved payment methods, including debit or
                credit cards, reward points accrued via our Loyalty Program, or
                available myGuide Credits.{" "}
                <strong>
                  All contributions made through these methods are final and
                  non-refundable. Limitation of Liability
                </strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                myGuide Platform and its affiliates provide the Support
                Features “as is” and disclaim any and all warranties, express or
                implied, including but not limited to warranties of
                merchantability, fitness for a particular purpose, and
                non-infringement. We make no representations or guarantees
                concerning the conduct of Participating Organizations or the
                ultimate use of funds. By using these features, you agree that
                neither the myGuide Platform nor its affiliates shall be held
                liable for any direct, indirect, incidental, special, or
                consequential damage or losses arising out of your participation
                in or use of the Support Features.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                Should a Participating Organization become ineligible or unable
                to receive funds before payment is made, we reserve the right,
                at our sole discretion and without notice, to reallocate the
                funds to another Participating Organization that aligns with a
                similar mission or objective.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>Use of Trademarks</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                All trademarks, service marks, logos, and brand identifiers
                appearing in connection with the Support Features are the
                property of their respective owners and are likely to be
                protected under intellectual property laws. You may not use,
                copy, or display these marks without the prior written consent
                of the respective trademark holders.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                By participating in the Support Features, you confirm your
                acceptance of these terms. These terms form part of and are
                governed by the Platform’s broader Terms and Conditions, which
                may be amended or updated from time to time. Continued use of
                the Platform following any updates shall constitute your
                agreement to such modifications.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>10. Payments, Fees, and Charges</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                When placing orders through the myGuide Platform, you agree to
                pay the following amounts, where applicable:
              </p>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Charges for Products and Services provided by myGuide
                    Platform;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Any applicable myGuide Platform Fees;
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="page" title="Page 10">
          <div className="layoutArea">
            <div className="column">
              <p style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                •{" "}
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  Charges for Partner Products and Services as offered by
                  third-party Partners.
                </span>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                All fees and charges are inclusive of applicable taxes (e.g.,
                VAT or sales tax) as required by law.{" "}
                <strong>Disclosure of Charges at Checkout</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                All applicable Charges and Platform Fees will be disclosed
                during the checkout process. These may be updated prior to order
                confirmation or delivery (for goods). Once an order is
                confirmed, pricing is fixed unless an obvious pricing error has
                occurred. In such a case, you will be notified and may either
                confirm the order at the correct price or cancel and receive a
                full refund.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>Accepted Payment Methods</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                Payments may be made using:
              </p>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Debit or credit cards; or
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Any alternative method offered at the time of placing your
                    order.
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    In certain instances, a temporary hold may be placed on your
                    card for an estimated amount. This pre-authorization does
                    not constitute a charge, and any unused amount will be
                    released promptly after the service is rendered.
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    <strong>Cash-on-Delivery Terms</strong>
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Where available and selected:
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    • Only cash will be accepted;
                    <br />
                    • You must provide the exact amount;
                    <br />• Captains are not required to carry sufficient change
                    and cannot deliver orders unless full payment is received.
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    <strong>Partner Payment Facilitation</strong>
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    For orders involving Partner Products and Services:
                  </p>
                </li>
              </ul>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    myGuide Platform may act as the Partner’s{" "}
                    <strong>limited payment collection agent</strong>;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Payment made to myGuide Platform is considered payment
                    made directly to the Partner;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    myGuide Platform may collect applicable Platform Fees
                    directly from you.
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    <strong>Finality of Payments and Refunds</strong>
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    All Charges and Platform Fees are{" "}
                    <strong>final and non-refundable</strong>, unless otherwise
                    determined by myGuide Platform or the Partner.
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Where applicable, refunds will be issued either:
                  </p>
                </li>
              </ul>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    As myGuide Credits; or
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Using your original payment method, at our discretion.
                  </span>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Refunds to cards typically take{" "}
                    <strong>7–15 business days</strong>, though delays may occur
                    due to external banking processes. myGuide Platform shall
                    not be held liable for any such delays beyond its control.
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    <strong>Failed Payments and Alternate Methods</strong>
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    If your selected payment method fails:
                  </p>
                </li>
              </ul>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    We may attempt to charge an alternate method saved to your
                    Account;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    You are responsible for all Charges and Fees incurred under
                    your Account.{" "}
                    <strong>
                      Post-Transaction Charges and Payment Method Restrictions
                    </strong>
                  </span>
                </li>
              </ul>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Restrict deletion of payment methods from your Account for
                    up to <strong>120 days</strong>;
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="page" title="Page 11">
          <div className="layoutArea">
            <div className="column">
              <p>
                <span style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  •{" "}
                </span>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  Collect such additional Charges from your existing or
                  alternate saved payment methods.{" "}
                  <strong>Changes to Fees and Charges</strong>
                </span>
                <br />
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  myGuide Platform may, at its discretion and at any time:
                </span>
              </p>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Introduce, modify, or remove Platform Fees;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Partners may also revise their Charges independently.
                  </span>
                  <br />
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    While we strive to notify you of such changes, you are
                    responsible for all amounts incurred under your Account
                    regardless of prior notice.
                  </span>
                  <br />
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    <strong>Right of Set-Off</strong>
                  </span>
                  <br />
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    If you owe money to myGuide Platform or its Affiliates:
                  </span>
                </li>
              </ul>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    We may, where reasonable and practicable,{" "}
                    <strong>offset such amounts</strong> against funds or
                    credits held in your Account;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      We will notify you in advance wherever feasible before
                      exercising this right.
                    </span>
                  </p>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      <strong>11. DISCLAIMER</strong>
                    </span>
                  </p>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      You acknowledge and agree that the myGuide Platform,
                      including all content made available on it, as well as any
                      Products and Services accessed through it, are provided on
                      an <strong>“as is”</strong> and{" "}
                      <strong>“as available”</strong> basis. To the fullest
                      extent permitted by applicable law, myGuide Platform and
                      its Affiliates expressly disclaim all representations,
                      warranties, guarantees, conditions, and
                      undertakings—whether express, implied, statutory, or
                      otherwise—that are not explicitly set forth in these
                      Terms. This includes, but is not limited to, implied
                      warranties of merchantability, fitness for a particular
                      purpose, and non-infringement. myGuide Platform and its
                      Affiliates make no representation or warranty regarding:
                    </span>
                  </p>
                </li>
              </ul>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    The accuracy, reliability, quality, timeliness, suitability,
                    or availability of the Platform or any content, Products, or
                    Services accessible through it;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    The uninterrupted or error-free operation of the Platform;
                    or
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      The quality, safety, suitability, or conduct of third
                      parties you engage with through the Platform,
                    </span>
                  </p>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      including Partners.
                    </span>
                    <br />
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      You understand and agree that your use of the Platform and
                      any associated Products or Services is undertaken entirely
                      at your own risk.
                    </span>
                    <br />
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      <strong>User and Third-Party Conduct</strong>
                    </span>
                    <br />
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      myGuide Platform and its Affiliates bear no
                      responsibility and shall not be held liable for the
                      conduct—whether online or offline—of any User, Partner, or
                      third party. You are solely responsible for exercising
                      appropriate judgment, caution, and common sense when
                      interacting with others via the Platform.{" "}
                      <strong>Location Data</strong>
                    </span>
                    <br />
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      Location data provided by the myGuide Platform is
                      intended solely for general informational purposes. It is{" "}
                      <strong>not</strong> intended for use in critical or
                      high-accuracy scenarios, including situations where
                      inaccurate, delayed, or incomplete data could result in
                      personal injury, death, property damage, or environmental
                      harm.
                    </span>
                    <br />
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      myGuide Platform, its Affiliates, and its data providers
                      make no warranty or guarantee regarding the accuracy,
                      availability, completeness, reliability, or timeliness of
                      any location data displayed or used by the Platform. To
                      the maximum extent permitted by law, myGuide Platform,
                      its Affiliates, and its providers shall not be liable for
                      any losses or damages arising from your reliance on such
                      location data.
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="page" title="Page 12">
          <div className="layoutArea">
            <div className="column">
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <strong>12. LIMITATION OF LIABILITY</strong>
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  To the maximum extent permitted by applicable law, myGuide
                  Platform and its Affiliates shall not be liable to you for
                  any:
                </span>
              </p>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Loss of profits, revenue, business, or anticipated savings;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Loss of or damage to data;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Personal injury or property damage;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      Indirect, incidental, special, exemplary, punitive, or
                      consequential losses;
                    </span>
                  </p>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      arising out of, relating to, or resulting from your access
                      to or use of the myGuide Platform, or any Products and
                      Services made available through it—even if myGuide
                      Platform or its Affiliates have been advised of the
                      possibility of such damages.
                    </span>
                    <br />
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      <strong>
                        Third-Party Transactions and Platform Access
                      </strong>
                    </span>
                    <br />
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      myGuide Platform and its Affiliates shall not be liable
                      for any losses, damages, or liabilities arising from:
                    </span>
                  </p>
                </li>
              </ul>
              <ol style={{ listStyleType: "decimal" }}>
                <li style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    <strong>Your access to, use of, or reliance on</strong> the
                    myGuide Platform (including any content available through
                    it), or any Products and Services available via the
                    Platform;
                  </span>
                </li>
                <li style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    <strong>Your inability to access or use</strong> the
                    myGuide Platform or its associated Products and Services;
                  </span>
                </li>
                <li style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    <strong>Any relationship or transaction</strong> between you
                    and any third party, including Partners;
                  </span>
                </li>
              </ol>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  regardless of whether myGuide Platform or its Affiliates
                  have been informed of the potential for such losses.
                </span>
                <br />
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <strong>Force Majeure</strong>
                </span>
                <br />
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  myGuide Platform and its Affiliates shall not be held liable
                  for any delay or failure to perform resulting from causes
                  beyond their reasonable control, including but not limited to
                  acts of God, natural disasters, labor disputes, power outages,
                  network interruptions, or governmental actions.
                </span>
                <br />
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <strong>Aggregate Liability Cap</strong>
                </span>
                <br />
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  In any event, and notwithstanding any other provision of these
                  Terms, the total cumulative liability of myGuide Platform
                  and its Affiliates to you for all claims, losses, and causes
                  of action arising out of or related to these Terms—including
                  your use of the Platform, the Products and Services, any
                  linked websites or applications, any posted materials, or any
                  acts or omissions of Partners or third parties— shall not
                  exceed:
                </span>
                <br />
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <strong>Two Thousand Qatar Riyal (QAR 2,000)</strong> or its
                  equivalent in local currency.
                </span>
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="page" title="Page 13">
          <div className="layoutArea">
            <div className="column">
              <p className="text-title">
                <strong>13. Indemnification</strong>
              </p>
              <p className="text-body">
                You agree to{" "}
                <strong>defend, indemnify, and hold harmless</strong> myGuide
                Platform, its Affiliates, and their respective officers,
                directors, agents, and employees from and against any and all
                losses, liabilities, claims, damages, expenses, and costs
                (including reasonable legal and professional fees) that they may
                suffer or incur, arising out of or in connection with:
              </p>
              <ol className="text-body">
                <li>
                  Your access to or use of the myGuide Platform, including any
                  Products and Services ordered through it;
                </li>
                <li>Your breach or violation of these Terms;</li>
                <li>
                  Your infringement or violation of the rights of any third
                  party, including intellectual property rights, privacy rights,
                  or contractual rights.
                </li>
              </ol>

              <p className="text-title">
                <strong>
                  14. Personal Belongings and Insurance Disclaimer
                </strong>
              </p>
              <p className="text-body">
                You acknowledge and agree that{" "}
                <strong>
                  myGuide Platform is not responsible for the loss, theft, or
                  damage of any personal belongings
                </strong>{" "}
                under any circumstances. This includes, but is not limited to,
                losses or damage caused by:
              </p>
              <ol className="text-body">
                <li>
                  <strong>Theft, snatching, or other criminal activity;</strong>
                </li>
                <li>
                  <strong>Products and Services</strong> provided by myGuide
                  Platform that you have ordered through the Platform;
                </li>
                <li>
                  <strong>Partners or their authorized personnel</strong> while
                  performing Partner Products and Services ordered via the
                  Platform.
                </li>
              </ol>

              <p className="text-body">
                You are solely responsible for the safekeeping of your personal
                property and are advised not to leave your belongings
                unattended, especially when engaging a Partner to provide
                services at your residence or any other premises.
              </p>
              <p className="text-title">
                <strong>Assumption of Risk</strong>
              </p>
              <p className="text-body">
                By using the myGuide Platform and its services, you
                acknowledge and accept all such risks. You agree that myGuide
                Platform shall not be held liable for any acts, omissions,
                negligence, or misconduct of other Users, Partners, or third
                parties.
              </p>

              <p className="text-title">
                <strong>Insurance Coverage Disclaimer</strong>
              </p>
              <p className="text-body">
                myGuide Platform may maintain its own insurance policies,
                which in some instances could extend limited benefits to you. If
                you are eligible to benefit from such coverage:
              </p>
              <ul className="text-body">
                <li>
                  You agree to comply with all claim reporting requirements;
                </li>
                <li>
                  You accept any coverage <strong>at your own risk</strong>;
                </li>
                <li>
                  You understand that myGuide Platform{" "}
                  <strong>does not act as an insurance broker or agent</strong>,
                  and makes no guarantees, representations, or warranties
                  regarding the availability, sufficiency, or outcome of any
                  insurance coverage.
                </li>
              </ul>

              <p className="text-title">
                <strong>15. Data Protection</strong>
              </p>
              <p className="text-body">
                Our collection and use of personal information in connection
                with the myGuide Platform and the Products and Services is as
                provided in our Privacy Policy that is located{" "}
                <a href="/privacy-policy" className="text-link">
                  <strong>here</strong>
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="page" title="Page 14">
          <div className="layoutArea">
            <div className="column">
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>16. Communications</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                By registering for and using the myGuide Platform, you
                expressly consent to receive communications from myGuide
                Platform and its Partners. These communications may be delivered
                via{" "}
                <strong>
                  email, SMS (text messages), telephone calls, and push
                  notifications
                </strong>
                , and may be sent using <strong>automated systems </strong>where
                permitted by applicable law.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>Types of Communications</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                Such communications may include, but are not limited to:
              </p>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Operational messages relating to your User Account, orders,
                    or use of the Platform;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Notifications regarding new features, changes, or updates to
                    the Platform;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Promotional messages or marketing campaigns conducted by
                    myGuide Platform or its Partners;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    General news, announcements, or updates relevant to
                    myGuide Platform services or industry
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    developments.
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    <strong>Charges for Communications</strong>
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Standard carrier charges, including{" "}
                    <strong>text messaging and data rates</strong>, may apply
                    for any SMS or mobile communications, and such costs are
                    your sole responsibility.
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    <strong>Opt-Out and Marketing Preferences</strong>
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    If you wish to opt out of receiving{" "}
                    <strong>
                      promotional or marketing-related communications
                    </strong>
                    , you may do so by:
                  </p>
                </li>
              </ul>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Contacting us at <strong>legal@myGuide.qa</strong>, or
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Following the instructions provided in the communication
                    itself or in-app instructions, or
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Reviewing and managing your preferences as outlined in the{" "}
                    <strong>myGuide Platform Privacy Policy</strong>.
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Please note that even if you opt out of promotional
                    communications, we may still send you non-promotional,
                    transactional messages related to your account or use of the
                    Platform.
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    <strong>
                      17. General Rules on Competitions, Contests and Giveaways
                    </strong>
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Unless otherwise specified, all competitions, contests,
                    giveaways, or promotional campaigns (“Competitions”) are
                    conducted solely by myGuide Platform or in collaboration
                    with its Partners or Third Parties. By entering or
                    participating in any Competition, each entrant (“Entrant”)
                    agrees to comply with these general rules and any additional
                    terms specific to the respective Competition.
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    <strong>Eligibility and Prize Terms</strong>
                  </p>
                </li>
              </ul>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Participation in a Competition{" "}
                    <strong>does not guarantee </strong>the receipt of a prize.
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    The{" "}
                    <strong>prize is non-transferable, non-exchangeable</strong>
                    , and <strong>no cash alternative </strong>will be offered.
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    In the event the advertised prize is unavailable due to
                    circumstances beyond myGuide Platform’s
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    control, we reserve the right to substitute it with a prize
                    of <strong>equal or greater value</strong>.
                  </p>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    To the extent permitted by law,{" "}
                    <strong>any taxes or duties </strong>applicable to the prize
                    shall be the sole
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    responsibility of the Competition Winner.
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    <strong>Winner Selection and Notification</strong>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="layoutArea">
            <div className="column">
              <p style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>• </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                Winners will be selected in accordance with the specific terms
                of the Competition.
              </p>
            </div>
          </div>
        </div>

        <div className="page" title="Page 15">
          <div className="layoutArea">
            <div className="column">
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Reasonable efforts will be made to contact the winner.
                    However, if a winner <strong>fails to respond </strong>
                    within the communicated timeframe, myGuide Platform
                    reserves the right to offer the prize to the next eligible
                    Entrant.
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    myGuide Platform shall not be liable if the prize{" "}
                    <strong>does not reach the winner </strong>due to reasons
                    beyond its reasonable control.
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    <strong>Disqualification and Entry Conditions</strong>
                  </p>
                </li>
              </ul>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    myGuide Platform may, at its sole discretion,{" "}
                    <strong>reject or disqualify any entry</strong>, provided
                    such
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    decision does not conflict with applicable law.
                  </p>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Participation may be affected by errors, technical failures,
                    server issues, viruses, or other causes
                  </p>
                  <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    beyond the control of myGuide Platform. In the event of
                    any dispute, myGuide Platform’s decision is final.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="page" title="Page 16">
          <div className="layoutArea">
            <div className="column">
              <p>
                <span style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  •{" "}
                </span>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  Acknowledge that the arbitrator shall not consolidate more
                  than one party’s claims or preside over any form of a class or
                  representative proceeding,{" "}
                  <strong>unless agreed to in writing by both parties</strong>.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  If any portion of this Arbitration Agreement is found to be
                  unenforceable, the entirety of this{" "}
                  <strong>Dispute Resolution</strong> section shall be deemed
                  void. Except as otherwise stated, this clause shall survive
                  termination of these Terms and applies to all Disputes between
                  you and myGuide Platform.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <strong>b) Mediation and Arbitration Process</strong>
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  All Disputes shall first be submitted to mediation proceedings
                  under the International Chamber of Commerce Mediation Rules
                  (ICC Mediation Rules).
                </span>
                <br />
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  If the Dispute is not resolved within sixty (60) days from the
                  date of submission to mediation, it shall be referred to and
                  finally resolved by arbitration under the Rules of Arbitration
                  of the International Chamber of Commerce (ICC Arbitration
                  Rules). The Emergency Arbitrator provisions of the ICC Rules
                  shall not apply.
                </span>
                <br />
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  Key terms of the arbitration process include:
                </span>
              </p>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    The Dispute shall be resolved by a sole arbitrator,
                    appointed in accordance with the ICC Arbitration Rules.
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    The place of mediation and arbitration shall be the city in
                    which myGuide Platform has its registered office.
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      The language of the proceedings shall be English, unless
                      you do not speak English. In such case, proceedings shall
                      be conducted in both English and your native language.
                    </span>
                  </p>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      <strong>c) Confidentiality</strong>
                    </span>
                  </p>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      The existence, content, and outcome of all mediation and
                      arbitration proceedings shall be strictly confidential.
                      This includes all:
                    </span>
                  </p>
                </li>
              </ul>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Submissions and documents exchanged between the parties;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Communications with the ICC, mediators, or arbitrators;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      Orders, rulings, and awards issued by the arbitrator.
                    </span>
                  </p>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      No such information shall be disclosed to any third party
                      without prior written consent from the other party, except
                      where:
                    </span>
                  </p>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      1. Disclosure is reasonably required for the conduct of
                      mediation or arbitration;
                    </span>
                    <br />
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      2. The third party provides written consent to be bound by
                      the confidentiality obligations stated herein.
                    </span>
                  </p>
                </li>
              </ul>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <strong>19. Other General Provisions</strong>
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <strong>a) Rights of Third Parties</strong>
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  Except as expressly provided in this section, these Terms do
                  not create or confer any rights in favor of any third party to
                  enforce any provision of the Terms.
                </span>
                <br />
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  However, <strong>Apple Inc.</strong>,{" "}
                  <strong>Google LLC</strong>, and/or their respective
                  international affiliates shall be deemed third-party
                  beneficiaries of these Terms if you access the myGuide
                  Platform using applications developed for iOS or Android
                  devices. These entities are not parties to the Terms and bear
                  no responsibility for the provision or support of the
                  Platform. Your use of such applications is also subject to
                  their respective terms of service, with which you agree to
                  comply.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="page" title="Page 17">
          <div className="layoutArea">
            <div className="column">
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  You further agree that the rights and benefits granted to{" "}
                  <strong>myGuide Platform</strong> under these Terms extend
                  equally to its Affiliates, each of whom shall be entitled to
                  enforce the Terms as if references to “myGuide,” “we,” “us,”
                  and “our” included references to such Affiliates.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <strong>b) Waiver</strong>
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  Any waiver of our rights or remedies under the Terms shall be
                  effective only if provided in writing. A failure or delay in
                  exercising any right, or the partial exercise of any right,
                  shall not constitute a waiver of that or any other right or
                  remedy.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <strong>c) Claims of Copyright Infringement</strong>
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  If you believe that any content on the myGuide Platform
                  infringes your copyright, please notify us by emailing{" "}
                  <strong>legal@myGuide.qa</strong>. Your notice should
                  include the specific URL of the allegedly infringing content
                  and any supporting information to allow us to investigate and
                  address your claim appropriately.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <strong>d) Notice</strong>
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  We may provide notice to you via:
                </span>
              </p>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    A general notice posted on the Platform;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Email sent to the email address registered in your Account;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      Written correspondence sent to your address as recorded in
                      your Account.
                    </span>
                  </p>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      You may provide notice to us by sending an email to{" "}
                      <strong>legal@myGuide.qa</strong>
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="page" title="Page 18">
          <div className="layoutArea">
            <div className="column">
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>h) Entire Agreement</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                These Terms, together with any applicable supplemental terms,
                constitute the <strong>entire agreement</strong> between you and
                myGuide Platform concerning your use of the Platform and
                supersede all prior agreements, communications, or
                understandings (oral or written). You acknowledge that you have
                not relied upon any statement, promise, or representation not
                expressly set out in these Terms.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>i) Governing Law</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                These Terms shall be governed by and construed in accordance
                with the laws of the jurisdiction in which the applicable
                myGuide Platform Affiliate is incorporated, without regard to
                any conflict of laws principles. Specific jurisdictional terms
                may apply in your region, as outlined in any relevant
                supplemental terms.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>PART 2 – PRODUCT AND SERVICE SPECIFIC TERMS</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>21. Quik & Supermarkets</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>a) General</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                The myGuide Platform facilitates the ordering and purchase of
                grocery items available from myGuide Platform Products and
                Services or Partner Supermarkets. The platform functions solely
                as an intermediary between users and Partner Supermarkets.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                Through the myGuide Platform, users can access an extensive
                selection of grocery bundles provided by various Partner
                Supermarkets and wholesale markets. The platform ensures a
                streamlined, secure, and user-friendly ordering process.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>b) Responsibility for Groceries</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                Although the myGuide Platform may facilitate delivery services
                for groceries ordered from certain Partner Supermarkets, all
                grocery bundles are exclusively provided by the respective
                Partner Supermarket or its Affiliate, which retains full
                responsibility for these items. Accordingly, the Partner
                Supermarket is solely accountable for the accuracy, quality,
                ingredients, and condition of any groceries ordered via their
                store. Groceries ordered through Partner Supermarkets are deemed
                Partner Products and Services under these Terms.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                It is essential for users to acknowledge that the myGuide
                Platform does not independently verify or guarantee the quality,
                ingredients, or accuracy of grocery products ordered from
                Partner Supermarkets, nor does it warrant the consistency of
                delivered groceries with their descriptions provided on the
                platform. While the myGuide Platform makes reasonable efforts
                to display accurate information to assist user decision-making,
                all displayed content is supplied by Partners or their
                Affiliates.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                Should a grocery item in your order become unavailable, you will
                receive a notification with an option to replace the unavailable
                item. If no confirmation regarding the replacement is provided
                by you, the Partner Supermarket will proceed to fulfill the
                remaining available items in the order.
              </p>
            </div>
          </div>
        </div>

        <div className="page" title="Page 19">
          <div className="layoutArea">
            <div className="column">
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                Supermarket will proceed to fulfill the remaining available
                items in the order. Users may also opt to cancel the entire
                order if the replacement items are not acceptable.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                The myGuide Platform and its Affiliates expressly disclaim any
                representations, warranties, or guarantees regarding groceries
                ordered through Partner Supermarket products and services.
                Consequently, the myGuide Platform and its Affiliates bear no
                liability whatsoever for any losses, damage, or inconveniences
                experienced as a result of ordering groceries through the
                Partner Supermarkets’ services. Users expressly acknowledge and
                accept that the myGuide Platform and its Affiliates shall not
                be liable for any losses incurred in this context.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                While the myGuide Platform is not directly responsible for
                grocery products ordered through Partner Supermarkets, it
                remains dedicated to ensuring a positive user experience.
                Therefore, the platform may act as an intermediary in
                facilitating the resolution of any complaints or disputes
                arising between users and Partner Supermarkets concerning
                grocery orders.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>
                  23. Delivery of Grocery Bundles and Goods - myGuide Delivery
                </strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>General Overview</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                myGuide Platform is primarily a Business-to-Business (B2B)
                platform offering bundled grocery products. The myGuide
                Platform supports only one delivery option: myGuide delivery.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>Responsibility of Partner Supermarkets</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                While the myGuide Platform facilitates delivery services for
                specific grocery orders, the availability of these services
                varies based on the particular Partner Supermarket and your
                location. All grocery bundles are exclusively provided by
                Partner Supermarkets or producers, who maintain sole
                responsibility for the accuracy, quality, ingredients, and
                condition of groceries ordered through their stores. These
                groceries are considered Partner Products and Services under
                these Terms.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>myGuide Delivery Service</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                The delivery service, referred to as “myGuide Delivery,”
                involves independent contractors collecting grocery items from
                Partners and delivering them on behalf of the myGuide
                Platform. Although myGuide Platform endeavors to ensure prompt
                and timely deliveries, multiple factors beyond its control may
                result in delays. Estimated delivery windows are provided at the
                time of order confirmation, and real-time tracking updates are
                available through the platform.
              </p>
            </div>
          </div>
        </div>

        <div className="page" title="Page 20">
          <div className="layoutArea">
            <div className="column">
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                on-delivery orders cannot be left unattended. Orders left in a
                safe place are done so at the customer's own risk, and myGuide
                Platform disclaims all liability related to such orders.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>Delivery Times and Delays</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                The estimated delivery times provided are not binding
                commitments. myGuide Platform and its Affiliates expressly
                disclaim any liability arising from delays or failed deliveries
                due to factors beyond their control, such as product
                availability, traffic, weather, or other unforeseen
                circumstances.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>Failed Delivery</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                If delivery cannot be completed due to the customer’s absence,
                lack of access, or absence of a safe place, myGuide Platform
                reserves the right to cancel the order without refunding any
                charges incurred. Alternatively, myGuide Platform may choose
                to leave the order at a safe location if feasible and payment is
                not cash-on-delivery.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>Special Delivery Instructions</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                Any special instructions provided by the customer will be
                communicated to the Partner. However, myGuide Platform
                reserves the right to follow standard delivery procedures when
                compliance with these instructions is impractical, impossible,
                or irresponsible.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>Tipping Policy</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                Currently, tips to delivery personnel (“Riders”) must be
                provided exclusively as cash transactions directly to Riders
                upon delivery completion. The myGuide Platform does not
                facilitate electronic gratuity payments.
              </p>
            </div>
          </div>
        </div>

        <div className="page" title="Page 21">
          <div className="layoutArea">
            <div className="column">
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  Certain features of myGuide Pay may be subject to myGuide
                  Fees (as indicated on the myGuide Platform) and transaction
                  limits concerning quantity or monetary value, as determined by
                  myGuide. Such fees and limits are subject to periodic
                  amendments by myGuide.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <strong>a) Payments Using User Accounts</strong>
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  myGuide will credit myGuide Credits to your User Account
                  in accordance with your instructions and following the receipt
                  of funds from you. You may reload your myGuide Credits,
                  subject to applicable limits set by myGuide or prevailing
                  laws and as communicated periodically.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  Your myGuide Credits can be utilized to pay for Products and
                  Services. In such cases, myGuide (or an authorized financial
                  institution or payment provider acting on myGuide's behalf)
                  shall settle the payment obligation up to the available
                  myGuide Credit balance in your User Account. Unless you have
                  access to Enhanced Wallet Services, myGuide Credits are
                  non-redeemable for cash.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  You may load myGuide Credits into your User Account using
                  one or more of the following Payment Methods, subject to their
                  availability:
                </span>
              </p>
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Debit Card;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Credit Card;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Gift Card (where legally permitted and available);
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Apple Pay;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                    Google Pay;
                  </span>
                </li>
                <li style={{ fontFamily: "SymbolMT", fontSize: "10pt" }}>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      Any other Payment Method introduced by myGuide from time
                      to time.
                    </span>
                  </p>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      You may reload myGuide Credits prior to placing an Order
                      for Products and Services by selecting the myGuide Pay
                      option and choosing 'Add Funds' under 'Your Wallet'. To
                      add a new Payment Method, you must do so prior to the
                      transaction.
                    </span>
                  </p>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      By selecting a Payment Method, you acknowledge your
                      agreement to the terms of service of myGuide’s payment
                      processing partners, financial institutions, or payment
                      service providers associated with the chosen Payment
                      Method. You agree to bear any associated fees imposed by
                      such entities.
                    </span>
                  </p>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      myGuide reserves the right, at its sole and absolute
                      discretion, to reject requests to reload myGuide
                      Credits, including scenarios where reloading would surpass
                      legally permitted storage limits. myGuide may also, at
                      any time, impose maximum limits on the amount or frequency
                      of reloads, providing notification via the myGuide
                      Platform.
                    </span>
                  </p>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      myGuide Credits may only be loaded and retained in the
                      currency linked to your User Account based on your
                      registered mobile number ("Base Currency"). Changing the
                      Base Currency at a later stage is not permitted. Payments
                      or reloads made using payment methods denominated in
                      currencies other than the Base Currency may incur
                      additional foreign exchange fees and rates, for which
                      myGuide disclaims any responsibility and provides no
                      advance notice.
                    </span>
                  </p>
                  <p>
                    <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                      When using myGuide Credits for transactions in foreign
                      currencies, myGuide will convert the required amount
                      into your Base Currency at an exchange rate determined
                      periodically by myGuide, which may
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="page" title="Page 22">
          <div className="layoutArea">
            <div className="column">
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  differ from official market rates. By confirming such
                  transactions, you accept the applicable exchange rate.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  By loading myGuide Credits, you acknowledge and accept that
                  you are not depositing funds with myGuide. myGuide may
                  hold received funds separately or commingled with other assets
                  and may utilize such funds at its discretion. Your rights to
                  these funds are strictly contractual, entitling you solely to
                  an equivalent value in myGuide Credits for use in connection
                  with myGuide Products and Services.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <strong>b) Bills and Recharge</strong>
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  The ability to access bill payment and mobile top-up services
                  (“Bills and Recharge Services”) is made available to you
                  through the myGuide Platform and is subject to change and
                  availability. myGuide reserves the right to suspend,
                  withdraw or restrict the availability of the Bills and
                  Recharge Services without liability at any time, for any
                  reason, with or without notice.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  In respect of the Bills and Recharge Services, myGuide is
                  providing the right for you to pay a utility bill or buy
                  airtime as agent for the relevant utility company or mobile
                  operator.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  You will be required to input the mobile number or bill
                  details to which any payment is to be credited into the
                  appropriate place(s) on the myGuide Platform. You are
                  responsible for ensuring that such details have been correctly
                  entered. If applicable, you will also be required to select
                  the top-up amount to be credited to the desired mobile number.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  You agree that you will be responsible for resolving any
                  disputes relating to payments related to Bills and Recharge
                  Services initiated through the myGuide Platform with the
                  relevant utility company or mobile operator. myGuide and its
                  Affiliates disclaim all liability to you in connection with
                  any such payment, and you agree that myGuide and its
                  Affiliates shall not be liable to you for any loss you suffer
                  or incur in connection with the same.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  The fees for Bills and Recharge Services may change depending
                  on applicable biller or mobile operator and will be shown on
                  the myGuide Platform. All bills and recharge transactions
                  are final and cannot be modified or removed once you have
                  entered and confirmed the relevant information on the
                  myGuide Platform.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <strong>c) 1-Click Checkout</strong>
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  Through your use of Third Party websites and applications, you
                  may have access to the 1-Click Checkout product/service.
                  1-Click Checkout makes it easier for Off-App Merchants to
                  collect payments for goods, services or products that they
                  provide to you. 1-Click Checkout enables you to use your
                  existing card-on- file to complete your purchase on the
                  Off-App Merchant site or app.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  Using 1-Click Checkout does not change anything about the
                  relationship you have with that Off-App Merchant or your card
                  provider or bank in terms of your payment for the goods,
                  services or products of the Off-App Merchants.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  If you elect to use the 1-Click Checkout where an Off-App
                  Merchant has this feature enabled, you will be redirected to
                  your existing Payment Methods on the myGuide Platform. Your
                  available Payment Methods
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="page" title="Page 23">
          <div className="layoutArea">
            <div className="column">
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                will be limited to your cards-on-file only and you will not be
                able to use myGuide Credits in relation to this feature. In
                order to enable the processing of your payment for goods,
                services or products offered by the Off-App Merchant, myGuide
                is using the information you store through the myGuide
                Platform (or with permitted third party providers (where
                relevant)) to make payments for Products and Services.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                You are responsible for the purchase you make using 1-Click
                Checkout and the Off-App Merchant is responsible for supplying
                you with the goods, services or products you have purchased
                through their site or app. If there is an issue with the goods,
                services or products you have purchased using 1-Click Checkout,
                please get in touch, directly, with the Off-App Merchant. Any
                returns, exchanges, refunds are subject to the policy of the
                Off-App Merchant you have purchased from. myGuide is not
                responsible for processing or managing refunds, chargebacks or
                other issues relating to your purchase. myGuide is not subject
                to and does not have control over the policies of any Off-App
                Merchant and is not responsible for the actions or omissions of
                any Off-App Merchant. myGuide and its Affiliates disclaim all
                liability in connection with goods, services or products you
                purchase from Off-App Merchants and you agree that myGuide and
                its Affiliates shall not be liable to you for any Loss you
                suffer or incur (i) as a result of any act or omission of an
                Off-App Merchant and/or (ii) that arises out of, or in
                connection with, you viewing, considering, ordering, purchasing
                and/or receiving goods, services or products from Off-App
                Merchants.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>d) Fraudulent Activity</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                You agree to notify myGuide immediately upon becoming aware of
                any fraudulent activity perpetrated through your User Account.
                Notifications may be made via the myGuide Platform or by email{" "}
                <span
                  style={{
                    color: "rgb(27.5%, 47.1%, 52.5%)",
                    fontFamily: "Aptos",
                    fontSize: "12pt",
                  }}
                >
                  <strong>legal@myGuide.com</strong>
                </span>{" "}
                You are solely responsible for informing your financial
                institution or payment services provider of any fraud related to
                a payment card saved in your User Account.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                You agree that we and our Affiliates are not responsible for the
                unauthorized use of your User Account. myGuide reserves the
                right (in its sole and absolute discretion) to suspend or void
                any transaction, where we suspect that the transaction is
                related to fraudulent, unlawful, illegal, suspicious or criminal
                activity or that you are otherwise in violation of the Terms.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                If myGuide becomes aware or has reason to believe that your
                User Account is being used in an unauthorized, unlawful,
                improper or fraudulent manner or for criminal activities (or has
                been so used previously), or you do not comply with applicable
                laws and regulations or any of the conditions relating to the
                use of the Products and Services, including the Terms, myGuide
                may at its sole discretion take certain actions against you,
                including, but not limited to: (i) suspending or terminating
                your right to use the User Account, certain products, the
                myGuide Platform (or certain parts of it), (ii) blocking or
                clawing back any available balance in your User Account; (iii)
                legal action against you (including claim for the cost of the
                action), and/or (iv) disclosure of such information to law
                enforcement authorities as we feel is necessary.
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                <strong>e) Chargebacks, refunds and disputes</strong>
              </p>
              <p style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                When you use a card for payment through your User Account, the
                issuer of that card is responsible for the settlement of the
                transaction. You acknowledge that transaction errors may result
                in a reversal of the transaction, fees, claims, penalty or
                chargeback from the financial institution or payment services.
              </p>
            </div>
          </div>
        </div>

        <div className="page" title="Page 24">
          <div className="layoutArea">
            <div className="column">
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  provider that has issued the payment card. You acknowledge
                  that the financial institution or payment services provider
                  determines any amount reversed, returned or charged back.
                  myGuide is bound to follow the instructions of that
                  financial institution or payments services provider. myGuide
                  and its Affiliates disclaim all liability in connection with
                  the reversal of a transaction, fees, claims, penalty or
                  chargeback by the financial institution or payment services
                  provider and you agree that myGuide and its Affiliates shall
                  not be liable to you for any Loss you suffer or incur in
                  connection with the same. You agree that you will be
                  responsible for resolving any disputes with the financial
                  institution which has issued your card.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  If, notwithstanding the above, you have a complaint in
                  relation to myGuide Pay or any transactions you have made
                  using your User Account, please contact us at{" "}
                </span>
                <span
                  style={{
                    color: "rgb(27.5%,47.1%,52.5%)",
                    fontFamily: "Aptos",
                    fontSize: "12pt",
                  }}
                >
                  <strong>legal@myGuide.com </strong>
                </span>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  . Any dispute must be submitted within 90 days of the
                  transaction in dispute. We may ask for information about the
                  disputed transaction, but please note that we will never ask
                  you for any security information about your User Account.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  myGuide reserves the right to investigate the circumstances
                  of each complaint it receives and to determine the most
                  appropriate course of action, including: (i) declining your
                  application for any or all of the Products and Services, (ii)
                  terminating any or all of the Products and Services, (iii)
                  reversing any relevant transaction, (iv) withholding funds
                  from you or restricting your access to your User Account, or
                  (v) doing anything else we reasonably consider necessary. We
                  will inform you of any such actions we take unless we have
                  reasonable belief that we are prevented from doing so by law
                  or regulation or we believe that doing so would compromise our
                  anti-fraud or security measures.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  You acknowledge that myGuide is under no obligation to
                  recall funds and will not be liable if it is unable to
                  partially or fully recall the funds subject to the dispute.
                  You may not be eligible to receive a refund if you failed to
                  keep the security details relating to your card safe or are a
                  victim of financial fraud, even if the transaction was done by
                  third parties without your knowledge or permission.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <strong>26. Loyalty Program</strong>
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  Loyalty Program is a myGuide Product and Service. In markets
                  where the Loyalty Program is available, you automatically
                  become part of the Loyalty Program by creating an Account. The
                  Loyalty Program is not available in markets where
                  myGuidePlus is available.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  The Loyalty Program is a way for Users to earn points for
                  using the myGuide Platform. Points can be redeemed for
                  rewards, such as discounts on different Products and Services
                  on the myGuide Platform. The number of points you earn
                  depends on your usage of the myGuide Platform. You can also
                  earn points by referring friends to myGuide.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  Points expire after 12 months, so be sure to redeem them
                  before they expire. Rewards and participating partners may
                  vary from market to market, so check the myGuide website or
                  app for the latest information. myGuide has the right to
                  change the terms of the Loyalty Program at any time, so be
                  sure to read the latest terms and conditions before you redeem
                  your points.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="page" title="Page 25">
          <div className="layoutArea">
            <div className="column">
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  myGuide is not liable for any damages caused by the Loyalty
                  Program. If you violate the terms of the Loyalty Program, your
                  points may be forfeited. Separate terms and conditions may
                  apply to rewards.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  <strong>27. myGuide Plus</strong>
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  myGuide Plus is a myGuide Product and Service. myGuide
                  Plus is a monthly subscription program that simplifies your
                  life with a variety of exclusive benefits conveniently
                  gathered under one subscription. As a User, you may be
                  eligible to subscribe to myGuide Plus, through which you may
                  access exclusive Benefits through the myGuide Platform
                  and/or when purchasing Products and Services from myGuide
                  Platform and/or its Partners.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  The Benefits will either be automatically applied when making
                  a transaction through the myGuide Platform or you may be
                  required to carry out extra steps to make use of a Benefit,
                  which steps will be communicated to you by myGuide from time
                  to time.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  The availability of Benefits is subject to all applicable
                  local laws and regulations and are offered in good faith,
                  however they may not be available and are subject to change if
                  prohibited or restricted by applicable law or regulation.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  Each Benefit may have additional terms or limitations. When
                  redeeming Benefits made available by a Partner, separate terms
                  and conditions will apply. In addition, separate terms and
                  conditions will apply to any Products and Services you
                  purchase from a Partner as part of the myGuide Plus program.
                  Please read any separate terms and conditions carefully. You
                  agree to abide by the terms and conditions of any Partner you
                  elect to deal with. You understand that any violation of any
                  such Partner’s terms and conditions, or rules and
                  restrictions, may result in you being denied access to the
                  applicable Benefit, or Products and Services, and you losing
                  any monies paid.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  You may be given an option to subscribe to myGuide Plus
                  through in-app messaging or other digital channels (“Offer”).
                  Each Offer may include important corresponding terms, such as
                  the type of Benefits included in a Subscription Plan, the cost
                  of the Subscription Charge and the Billing Cycle. It is your
                  responsibility to ensure that you have reviewed the Offer
                  terms before you accept and purchase a Subscription.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  When you buy a Subscription Plan, you will be charged the
                  Subscription Charge for your first Billing Cycle on the date
                  of purchase, which activates the Benefits identified in the
                  Offer. myGuide may elect to provide you with a free trial to
                  myGuide Plus or other promotional subscriptions in which
                  case you will be charged the Subscription Charge at the end of
                  the trial period. If you do not wish to be charged the
                  Subscription Charge, you must cancel the trial or promotional
                  subscription before the end of the trial or promotional
                  subscription. Eligibility for a free trial or promotional
                  subscription is determined by myGuide at its sole
                  discretion.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  AUTOMATICALLY (AND WITHOUT PRIOR NOTICE TO THE EXTENT ALLOWED
                  BY LAW), YOUR SUBSCRIPTION PLAN WILL RENEW AT THE BEGINNING OF
                  EACH BILLING CYCLE, AND THE
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="page" title="Page 26">
          <div className="layoutArea">
            <div className="column">
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  SUBSCRIPTION PRICE WILL BE AUTOMATICALLY CHARGED TO A PAYMENT
                  METHOD AVAILABLE IN myGuide PAY IN YOUR ACCOUNT. If there
                  are insufficient funds or the payment methods in myGuide Pay
                  in your User Account are declined, myGuide will prompt you
                  for a new payment method but reserves the right to terminate
                  any unpaid Subscription Plan periods without further charge to
                  you. Any paid Subscription Charges are non-refundable and
                  non-transferable.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  When VAT (or equivalent taxes) is in force when you buy a
                  Subscription Plan, the Subscription Charges shall be inclusive
                  of VAT. Where there is a future change in the VAT rate,
                  myGuide may at its discretion increase/decrease (as
                  applicable) the Subscription Charge. When VAT (or equivalent
                  taxes) is not in force when you buy a Subscription Plan, the
                  Subscription Charges shall be exclusive of VAT and if VAT (or
                  equivalent) is later introduced, myGuide may add the
                  applicable VAT to the Subscription Charges.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  You can cancel your Subscription Plan at any time prior to
                  your next scheduled payment to avoid further charges and
                  renewals. If you cancel your Subscription Plan, you will still
                  have access to the Benefits until the end of the current
                  Billing Cycle, and will not be refunded on a pro-rata basis
                  for any cancellation initiated during a Billing Cycle. From
                  time to time, myGuide may increase the Subscription Charge,
                  in which case you will be notified before your next Billing
                  Cycle. If you do not wish to be charged the new Subscription
                  Charge, you are required to cancel your subscription.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  myGuide and its Affiliates make no representation, and give
                  no warranty or guarantee, either expressed or implied, and
                  expressly disclaim all liability (including consequential
                  damages) with respect to the availability, accuracy,
                  timeliness, cost, quality or fitness of goods, services or
                  products provided through myGuide Plus. myGuide and its
                  Affiliates will also have no liability if any participating
                  Partner improperly denies you the right to avail of a Benefit.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  myGuide Plus has no predetermined termination date and may
                  continue until such time as myGuide decides to terminate the
                  myGuide Plus program or a specific Subscription Plan. This
                  may be at any time, with or without notice. If the myGuide
                  Plus program is terminated, myGuide may refund you any
                  unconsumed portion of your Subscription Charge without any
                  further obligation or liability, including the availability of
                  any Benefits after the conclusion of any notice period.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  In addition, myGuide reserves the right to modify the
                  myGuide Plus program, a Subscription Plan or any Benefit
                  included in it, which changes will come into effect
                  immediately, at your next Billing Cycle or at any other date
                  determined by myGuide. myGuide may, among other things:
                  (i) change the terms applicable to myGuide Plus, including
                  eligibility to or availability of Subscription Plans and the
                  rules and terms that govern them; (ii) increase or decrease
                  the number of Benefits available; and/or (iii) add or modify
                  rules for redeeming Benefits, including blackout dates for use
                  of Benefits.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  myGuide reserves the right to cancel your Subscription Plan
                  and/or your access to myGuide Plus if you appear to be using
                  the Subscription Plan in a manner inconsistent with the terms
                  or intent of the myGuide Plus program or any portion
                  thereof. Reasons for which myGuide may cancel our
                  Subscription Plan and/or your access to myGuide Plus
                  include, but are not limited to: (i) violation of the Terms;
                  (ii) violation of any national,
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  state or local law or regulation in connection with the use of
                  myGuide Plus; (iii) commission of fraud or
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="page" title="Page 27">
          <div className="layoutArea">
            <div className="column">
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  abuse involving any portion of myGuide Plus; or (iv) action,
                  in any other way, to the detriment of myGuide Plus or any of
                  its stakeholders; all as may be determined by myGuide in its
                  sole discretion.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "Aptos", fontSize: "12pt" }}>
                  Notwithstanding the foregoing, myGuide Plus violations,
                  fraud or abuse in relation to rewards points and credit, tier
                  status or reward usage is subject to appropriate
                  administrative and/or legal action by appropriate governmental
                  authorities and/or by myGuide including, without limitation,
                  the cancellation of the account.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default TermsAndCondition;
