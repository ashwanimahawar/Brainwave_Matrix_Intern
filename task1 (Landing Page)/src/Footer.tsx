import React from "react";
import FooterListItems from "./FooterListItems";

const Footer: React.FC = () => {
  return (
    <section>
      <div className="flex mx-auto w-[1040px] gap-8 py-10">
        <div className="w-[25%] h-full">
          <img src="./Razorpay_logo.svg" className="h-6 w-auto" alt="" />
          <p className="text-[14px] leading-6 mt-4 text-gray-600">
            Razorpay is the only payments solution in India that allows
            businesses to accept, process and disburse payments with its product
            suite. It gives you access to all payment modes including credit
            card, debit card, netbanking, UPI and popular wallets including
            JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.
          </p>

          <p className="text-[14px] leading-6 mt-4 text-gray-600">
            {" "}
            RazorpayX supercharges your business banking experience, bringing
            effectiveness, efficiency, and excellence to all financial
            processes. With RazorpayX, businesses can get access to
            fully-functional current accounts, supercharge their payouts and
            automate payroll compliance.{" "}
          </p>

          <p className="text-[14px] leading-6 mt-4 text-gray-600">
            {" "}
            Manage your marketplace, automate bank transfers, collect recurring
            payments, share invoices with customers and avail working capital
            loans - all from a single platform. Fast forward your business with
            Razorpay.
          </p>

          <p className="text-gray-600 my-5 text-[10px]">
            Disclaimer: The RazorpayX powered Current Account and VISA corporate
            credit card are provided by RBI licensed banks. Your RazorpayX
            powered current account is provided by our partner banks i.e, ICICI
            & RBL bank, in accordance with RBI regulations. RazorpayX itself is
            not a bank and doesn't hold or claim to hold a banking license.
          </p>

          <div className="flex">
            <img src="./PCI-DSS.png" className="h-[50%] w-[40%]" alt="" />
            <img src="./ISO.jpg" className="h-[50%] w-[50%]" alt="" />
          </div>
        </div>

        <div className="grid grid-cols-3 h-full">
          <div className="mr-6 h-full">
            <h2 className="font-bold text-slate-600 py-3 text-md">
              BANKING PLUS
            </h2>
            <ul>
              <FooterListItems text="RazorpayX" />
              <FooterListItems text="Source to pay" />
              <FooterListItems text="Current Accounts" />
              <FooterListItems text="Payouts" />
              <FooterListItems text="Payout Links" />
              <FooterListItems text="Corporate Credit Card" />
            </ul>
            <h2 className="font-bold text-slate-600 py-3 text-md">LENDING</h2>
            <ul>
              <FooterListItems text="Razorpay Capital" />
              <FooterListItems text="Instant Settlements" />
              <FooterListItems text="Line of Credit" />
              <FooterListItems text="Working Capital Loans" />
              <FooterListItems text="Marketplace Instant Settlements" />
            </ul>
            <h2 className="font-bold text-slate-600 py-3 text-md">
              BECOME A PARTNER
            </h2>
            <ul>
              <FooterListItems text="Refer and Earn" />
              <FooterListItems text="Onboarding APIs" />
            </ul>

            <h2 className="font-bold text-slate-600 py-3 text-md">MORE</h2>
            <ul>
              <FooterListItems text="Route" />
              <FooterListItems text="Invoices" />
              <FooterListItems text="Freelancer Payments" />
              <FooterListItems text="International" />
              <FooterListItems text="Flash Checkout" />
              <FooterListItems text="UPI" />
              <FooterListItems text="ePOS" />
              <FooterListItems text="Checkout Demo" />
              <FooterListItems text="RazorpayX Payroll" />
            </ul>
          </div>
          <div className="h-full">
            <h2 className="font-bold text-slate-600 py-3 text-md">
              ACCEPT PAYMENTS
            </h2>
            <ul>
              <FooterListItems text="Payment Gateway" />
              <FooterListItems text="Payment Pages" />
              <FooterListItems text="Payment Links" />
              <FooterListItems text="Razorpay POS" buttonText="NEW" />
              <FooterListItems text="QR Codes" />
              <FooterListItems text="Subscriptions" />
              <FooterListItems text="Smart Collect" />
              <FooterListItems text="Optimizer" />
            </ul>

            <h2 className="font-bold text-slate-600 py-3 text-md">
              DEVELOPERS
            </h2>
            <ul>
              <FooterListItems text="Docs" />
              <FooterListItems text="Integrations" />
              <FooterListItems text="API Reference" />
            </ul>
            <h2 className="font-bold text-slate-600 py-3 text-md">RESOURCES</h2>
            <ul>
              <FooterListItems text="Blog" />
              <FooterListItems text="Customer Services" />
              <FooterListItems text="Events" />
              <FooterListItems text="Chargeback" />
              <FooterListItems text="Settement Guide" />
            </ul>
            <h2 className="font-bold text-slate-600 py-3 text-md">SOLUTIONS</h2>
            <ul>
              <FooterListItems text="Education" />
              <FooterListItems text="E-commerce" />
              <FooterListItems text="SaaS" />
              <FooterListItems text="BFSI" />
            </ul>
            <h2 className="font-bold text-slate-600 py-3 text-md">
              FREE TOOLS
            </h2>
            <ul>
              <FooterListItems text="GST Calculator" />
              <FooterListItems text="Online TDS Payment" />
              <FooterListItems text="GST Number Search" />
              <FooterListItems text="GST Number by PAN" />
              <FooterListItems text="ROI Calculator" buttonText="NEW" />
              <FooterListItems text="CAGR Calculator" buttonText="NEW" />
              <FooterListItems text="EBITDA Calculator" buttonText="NEW" />
            </ul>
          </div>
          <div className="h-full">
            <h2 className="font-bold text-slate-600 py-3 text-md">COMPANY</h2>
            <ul>
              <FooterListItems text="About US" />
              <FooterListItems text="Carrers" />
              <FooterListItems text="Terms of Use" />
              <FooterListItems text="Privacy Policy" />
              <FooterListItems text="Grievance Redressal" />
              <FooterListItems text="Responsible Disclosure" />
              <FooterListItems text="Partners" />
              <FooterListItems text="White Papers" />
              <FooterListItems text="Corporate Information" />
            </ul>
            <h2 className="font-bold text-slate-600 py-3 text-md">
              HELP & SUPPORT
            </h2>
            <ul>
              <FooterListItems text="Support" />
              <FooterListItems text="Knowledge Base" />
            </ul>
            <h2 className="font-bold text-slate-600 py-3 text-md">
              FIND US ONLINE
            </h2>

            <h2 className="font-bold text-slate-600 py-3 text-md">
              REGD. OFFICE ADDRESS
            </h2>
            <p className="text-black text-sm">
              Razorpay Software Private Limited, <br />
              1st Floor, SJR Cyber, <br />
              22 Laskar Hosur Road, Adugodi, <br />
              Bengaluru, 560030, <br />
              Karnataka, India <br />
              CIN: U72200KA2013PTC097389 <br />{" "}
            </p>
            <p className="text-black text-sm pt-5 text-blue-500 cursor-pointer leading-7 hover:text-gray-600">
              © Razorpay 2024 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
