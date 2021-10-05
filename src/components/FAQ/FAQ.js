import React from "react";
import "./FAQ.css";
import question from "../../images/question.png";
const FAQ = () => {
  return (
    <>
        <div class="faq-header">
          <p>টিকা বিষয়ক সচরাচর জিজ্ঞাসা</p>
          <img src={question} alt="" />
        </div>
      <div className="faq-container">

        <p class="enroll-text">
          কোভিড- ১৯ করোনা ভাইরাসের টিকার জন্য পোর্টালে নিবন্ধন, পরবর্তী করনীয়,
          এসএমএস বার্তা প্রাপ্তি, টিকা কার্ড প্রাপ্তি , টিকা কেন্দ্র , টিকা
          গ্রহণের সময়, টিকার ডোজ, চূড়ান্ত সনদ প্রাপ্তি ইত্যাদি বিষয়ক বিভিন্ন
          প্রশ্ন ও উত্তর নিচের অংশে পাওয়া যাবে।
        </p>

        <section class="faq">
          <h3>কোভিড-১৯ ভ্যাকসিন বিষয়ক সচরাচর জিজ্ঞাসা</h3>

          <ul>
            <li>
              <p>নিবন্ধনের শেষ পর্যায়ে OTP পাই নাই করণীয় কি?</p>
              <p>
                আপনি OTP পুনরায় পাঠাতে পারেন। ভুলবশত OTP প্রদানের স্ক্রিনটি
                বন্ধ করে দিলে পুনরায় নিবন্ধন প্রক্রিয়া করতে পারবেন।
              </p>
            </li>

            <li>
              <p>
                কোভিড-১৯ করোনাভাইরাসের ভ্যাকসিনের জন্য নিবন্ধন করতে ইচ্ছুক,
                কিভাবে অনলাইনে নিবন্ধন করব?
              </p>
              <p>
                www.surokkha.gov.bd ওয়েব পোর্টালে প্রবেশ করে অথবা গুগল প্লে
                স্টোর থেকে “সুরক্ষা” অ্যাপটি ডাউনলোড করে নিবন্ধন করতে পারবেন।
                বিস্তারিত ওয়েব পোর্টালে "সহায়িকা" দেখুন।
              </p>
            </li>
            <li>
              <p>
                আমি অনলাইনে ভ্যাকসিনের জন্য নিবন্ধন করেছি, এখন আমার পরবর্তী
                করনীয় কি?
              </p>
              <p>
                www.surokkha.gov.bd ওয়েব পোর্টাল হতে ভ্যাকসিন কার্ড সংগ্রহ করুণ।
                পরবর্তীতে মোবাইল ফোনে SMS এর মাধ্যমে ভ্যাকসিনের তারিখ ও কেন্দ্র
                জানানো হবে।
              </p>
            </li>
            <li>
              <p>
                কোভিড-১৯ ভ্যাকসিনের জন্য নিবন্ধন পরবর্তী অবস্থা অনলাইনে কিভাবে
                যাচাই করব?
              </p>
              <p>
                www.surokkha.gov.bd ওয়েব পোর্টালে "নিবন্ধন স্ট্যাটাস" মেনু হতে
                জাতীয় পরিচয়পত্র ও মোবাইল নম্বর যাচাইপূর্বক নিবন্ধনের অবস্থা
                জানতে পারবেন।
              </p>
            </li>
            <li>
              <p>
                কোভিড-১৯ ভ্যাকসিন গ্রহণের জন্য ভ্যাকসিন কার্ড কিভাবে পেতে পারি?
              </p>
              <p>
                www.surokkha.gov.bd ওয়েব পোর্টালে "টিকা কার্ড সংগ্রহ" মেনু হতে
                জাতীয় পরিচয়পত্র ও মোবাইল নম্বর যাচাইপূর্বক ভ্যাকসিন কার্ড
                সংগ্রহ করতে পারবেন।
              </p>
            </li>
            <li>
              <p>
                ভ্যাকসিন গ্রহণের জন্য কেন্দ্র ও তারিখ সম্পর্কে কিভাবে জানবো?
              </p>
              <p>
                সফলভাবে ভ্যাকসিনের জন্য নিবন্ধন সম্পন্ন হওয়ার পর পরবর্তী সময়ে
                মোবাইল ফোনে SMS এর মাধ্যমে ভ্যাকসিনের তারিখ ও কেন্দ্র জানানো
                হবে।
              </p>
            </li>
            <li>
              <p>কোভিড-১৯ এর ভ্যাকসিনের কয়টি ডোজ গ্রহণ করতে হবে?</p>
              <p>কোভিড-১৯ এর ভ্যাকসিনের দুইটি ডোজ গ্রহণ করতে হবে।</p>
            </li>
            <li>
              <p>
                কোভিড-১৯ ভ্যাকসিন সম্পন্ন হওয়ার পর ভ্যাকসিন সনদ কিভাবে পেতে
                পারি?
              </p>
              <p>
                কোভিড-১৯ এর ভ্যাকসিনের দুইটি ডোজ সম্পন্ন হওয়ার পর
                www.surokkha.gov.bd ওয়েব পোর্টালে "টিকা সনদ সংগ্রহ" মেনু হতে
                জাতীয় পরিচয়পত্র ও মোবাইল নম্বর যাচাইপূর্বক ভ্যাকসিন সনদ সংগ্রহ
                করতে পারবেন।
              </p>
            </li>
            <li>
              <p>কোভিড-১৯ টিকা কাদের দেওয়া হবে?</p>
              <p>
                জাতীয় কোভিড-১৯ টিকাদান ও কর্ম পরিকল্পনা অনুসারে অগ্রাধিকার
                ভিত্তিক তালিকা অনুযায়ী সকলকে টিকা দেয়া হবে।
              </p>
            </li>
            <li>
              <p>
                একজন প্রশ্ন করলেন, আমার দাদার বয়স ৭০ বছর কিন্তু প্যারালাইজড
                বিছানা থেকে উঠতে পারেন না, কীভাবে আমার দাদা টিকা পাবে?
              </p>
              <p>
                কোভিড-১৯ টিকাদান কার্যক্রমে সেবাদান কেন্দ্রভিত্তিক, তাই উদ্দিষ্ট
                ব্যক্তিকে টিকাদান কেন্দ্রে এসে টিকা গ্রহণ করতে হবে।
              </p>
            </li>
            <li>
              <p>এই ক্যাম্পেইনে কাদের টিকা দেওয়া যাবে না?</p>
              <p>
                রেজিস্ট্রেশনকৃত/লাইন লিস্টিং-এর অর্ন্তভুক্ত তালিকার উদ্দিষ্ট
                জনগোষ্ঠী ছাড়া অন্য কোনো ব্যক্তিকে কোভিড টিকা দেয়া যাবে না। ১৮
                বছরের নীচে, গর্ভবতী মা এবং দুগ্ধদানকারী মা, অসুস্থ ও হাসপাতালে
                ভর্তি হওয়া ব্যক্তি। পরবর্তীতে চিকিৎসকের পরামর্শ অনুযায়ী
                নির্ধারিত টিকাদান কেন্দ্র থেকে টিকা নিতে অনুরোধ করতে হবে।
                ব্যক্তির ইচ্ছার বিরুদ্ধে টিকা দেয়া যাবে না।
              </p>
            </li>
            <li>
              <p>একজন প্রশ্ন করলেন, গর্ভবর্তী মহিলা কি এই টিকা পাবে?</p>
              <p>গর্ভবতী মহিলাদের আপাতত কোভিড-১৯ টিকা প্রদান করা হবে না।</p>
            </li>
            <li>
              <p>এনআইডি কার্ড হারিয়ে গেছে কীভাবে রেজিস্ট্রেশন করব?</p>
              <p>গর্ভবতী মহিলাদের আপাতত কোভিড-১৯ টিকা প্রদান করা হবে না।</p>
            </li>
            <li>
              <p>এনআইডি কার্ড হারিয়ে গেছে কীভাবে রেজিস্ট্রেশন করব?</p>
              <p>
                এনআইডি বা জাতীয় পরিচয়পত্রের মাধ্যমে অননাইন রেজিস্ট্রেশনে
                অর্ন্তভুক্ত করে এই কোভিড-১৯ টিকার আওতায় আনা হবে। কোভিড-১৯ টিকা
                পর্যায়ক্রমে সকলকেই দেয়া হবে। তাই পরবর্তীতে এনআইডি বা জাতীয়
                পরিচয়পত্রসহ আসুন।
              </p>
            </li>
            <li>
              <p>
                টিকাদান কার্ড আনি নাই, মোবাইলে কোনো তথ্য দেখা যাচ্ছে না; এখন কী
                করব?
              </p>
              <p>
                টিকাদানকর্মী তাঁকে কার্ডটি পুনরায় প্রিন্ট করে নিয়ে আসতে অনুরোধ
                করবেন
              </p>
            </li>
            <li>
              <p>
                ইতোমধ্যে কোভিড-১৯ হয়েছিল। চিকিৎসার পর ভালো হয়েছে, কোভিড-১৯ টিকা
                পাব?
              </p>
              <p>
                অগ্রাধিকারের ভিত্তিতে তালিকাভুক্ত হলে কোভিড-১৯ টিকা প্রদান করা
                হবে।
              </p>
            </li>
            <li>
              <p>
                ২৮ বছর বয়সী ৫ মাসের গর্ভবতী। সে কোভিড হাসপাতালে চাকরি করে;
                কোভিড-১৯ টিকা পাবে?
              </p>
              <p>
                গর্ভবতী মহিলাদের উপর কোভিড-১৯ টিকার প্রভাব নিশ্চিত না হওয়ায়
                গর্ভবতী মহিলাদের আপাতত কোভিড-১৯ টিকা প্রদান করা হবে না।
              </p>
            </li>
            <li>
              <p>
                একজন ফ্রর্টলাইন ওয়ার্কার। উনি কাজ শেষে প্রতিদিন বাসায় যান। তাহলে
                বাসার সবাই কি এই টিকা পাবেন?
              </p>
              <p>শুধু অগ্রাধিকারের তালিকার ভিত্তিতে টিকা প্রদান করা হবে।</p>
            </li>
            <li>
              <p>
                টিকাদান চলাকালীন অন্য কেন্দ্রের/এলাকার কোনো ব্যক্তি যদি টিকা
                নিতে আসে, তবে তাকে টিকা দেওয়া যাবে কিনা?
              </p>
              <p>
                সে যদি নির্দিষ্ট ঐ তারিখের টিকা প্রাপ্তির তালিকার অর্ন্তভুক্ত হন
                তবে টিকা দেয়া যাবে। টিকাদানকর্মী অবশ্যই অনলাইনে হালনাগাদ করবেন।
              </p>
            </li>
            <li>
              <p>প্রতিদিন প্রেসারের ঔষধ খেতে হয়; টিকা দেওয়া যাবে ?</p>
              <p>
                অগ্রাধিকারের ভিত্তিতে তালিকাভুক্ত হলে কোভিড-১৯ টিকা প্রদান করা
                হবে।
              </p>
            </li>
            <li>
              <p>পনেরো দিন আগে হার্টের অপারেশন হয়েছে; টিকা দেওয়া যাবে কিনা?</p>
              <p>
                সুস্থ হলে এবং অগ্রাধিকারের ভিত্তিতে তালিকাভুক্ত হলে কোভিড-১৯
                টিকা প্রদান করা হবে।
              </p>
            </li>
            <li>
              <p>এই টিকার কি কোনো পার্শ্ব-প্রতিক্রিয়া রয়েছে?</p>
              <p>
                অন্য সকল ঔষধ কিংবা টিকার মতো এই টিকারও কিছু পার্শ্ব-প্রতিক্রিয়ার
                সম্ভাবনা আছে। তবে বেশিরভাগ ক্ষেত্রেই সেগুলো খুবই মৃদু হয়ে থাকে
                যেমন - টিকার স্থানে ব্যথা, ফোলা, লালচে ভাব, মাংশপেশী ও
                অস্থিসন্ধিতে ব্যথা, দুর্বলতা, বমি বমি ভাব, জ্বর, ক্লান্তি
                ইত্যাদি। ক্লিনিকাল ট্রায়াল হতে প্রাপ্ত তথ্যানুযায়ী এখনও পর্যন্ত
                মারাত্মক কোন পার্শ্ব-প্রতিক্রিয়া সম্পর্কে জানা যায়নি। তবে আপনার
                যে কোন সমস্যা হলে অবশ্যই দ্রুত নিকটস্থ হাসপাতালে যান এবং
                চিকিৎসকের পরামর্শ গ্রহন করুন।
              </p>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default FAQ;
