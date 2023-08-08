import { useState } from "react";
import "./App.css";
import { useCopyToClipboard } from "./hooks";

const HeaderName = ({
  name,
  isEnglish,
  setIsEnglish,
}: {
  name: string;
  isEnglish: boolean;
  setIsEnglish: (param: boolean) => void;
}) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div className="language_bar">
        <p
          className={`language ${isEnglish ? "text" : ""}`}
          onClick={() => {
            setIsEnglish(true);
          }}
          style={{
            fontSize: "14px",
            marginRight: "10px",
            transition: "1000ms all ease",
            fontWeight: "500",
          }}
        >
          ENG
        </p>
        <p>{` | `}</p>
        <p
          className={`language ${!isEnglish ? "text" : ""}`}
          onClick={() => {
            setIsEnglish(false);
          }}
          style={{
            fontSize: "14px",
            marginLeft: "10px",
            transition: "1000ms all ease",
            fontWeight: "500",
          }}
        >
          VIE
        </p>
      </div>
      <h1
        style={{
          fontSize: "35px",
          fontFamily: "Josefin Sans",
          margin: 0,
          textAlign: "center",
        }}
      >
        {name}
      </h1>
    </div>
  );
};

const CopyText = ({
  text,
  value,
  copy,
  copiedText,
}: {
  text: string;
  value: string;
  copy: (text: string) => void;
  copiedText: string | null;
}) => {
  return (
    <Tooltip text={copiedText !== value ? "Sao chép" : "Đã sao chép"}>
      <a
        onClick={() => copy(value)}
        className={copiedText === value ? "grey_color" : "white_color"}
      >
        {text}
      </a>
    </Tooltip>
  );
};

const ContactInformation = ({
  email,
  githubLink,
  linkedin,
  phoneLabel,
  phoneLink,
  portfolioLink,
}: {
  portfolioLink: string;
  phoneLink: string;
  phoneLabel: string;
  email: string;
  githubLink: string;
  linkedin: string;
}) => {
  const { copy, copiedText } = useCopyToClipboard();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div className="contact-node">
        <Tooltip text={"Xem chi tiết"}>
          <a target="_blank" href={portfolioLink}>
            Portfolio
          </a>
        </Tooltip>
      </div>
      <div className="contact-node">
        <CopyText
          copiedText={copiedText}
          copy={copy}
          text={phoneLabel}
          value={phoneLink}
        />
      </div>
      <div className="contact-node">
        <CopyText
          copiedText={copiedText}
          copy={copy}
          text={email}
          value={email}
        />
      </div>
      <div className="contact-node">
        <Tooltip text={"Xem chi tiết"}>
          <a target="_blank" href={githubLink}>
            Github
          </a>
        </Tooltip>
      </div>
      <div className="contact-node">
        <Tooltip text={"Xem chi tiết"}>
          <a target="_blank" href={linkedin}>
            Linkedin
          </a>
        </Tooltip>
      </div>
    </div>
  );
};

const Tooltip = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="tooltip">
      <div
        onMouseOver={() => setHover(!hover)}
        onMouseOut={() => setHover(!hover)}
      >
        {children}
      </div>
      {hover && <div className="tooltip-content top">{text}</div>}
    </div>
  );
};

const Divider = ({ text }: { text: string }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          marginBottom: -3,
        }}
      >
        <a
          style={{
            margin: 0,
          }}
        >
          {text}
        </a>
      </div>
      <div
        style={{
          borderBottom: "0.5px solid #666",
          flexGrow: 1,
          marginLeft: "10px",
          marginRight: "10px",
        }}
      />
    </div>
  );
};

const IntroducePart = ({
  name,
  introduce,
}: {
  name: string;
  introduce: string;
}) => {
  return (
    <div>
      <Divider text={name} />
      <ul>
        <li>{introduce}</li>
      </ul>
    </div>
  );
};
const SkillPart = ({ name, skills }: { name: string; skills: string[] }) => {
  return (
    <div>
      <Divider text={name} />
      <ul>
        {skills.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const ExperienceTitle = ({
  text,
  place,
  year,
  company,
}: {
  text: string;
  place: string;
  year: string;
  company: string;
}) => {
  return (
    <div
      style={{
        margin: 0,
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <p
        style={{
          // color: "#fff",
          fontWeight: "600",
        }}
      >
        {text}
      </p>
      <p className="company">{company}</p>
      <p
        style={{
          fontStyle: "italic",
          color: "grey",
          fontSize: "12px",
        }}
      >
        {place}{" "}
        <span
          style={{
            fontStyle: "normal",
            color: "white",
          }}
        >
          {year}
        </span>
      </p>
    </div>
  );
};

const ExperiencesPart = ({
  name,
  experiences,
}: {
  name: string;
  experiences: {
    role: string;
    company: string;
    address: string;
    year: string;
    description: string[];
  }[];
}) => {
  return (
    <div>
      <Divider text={name} />
      {experiences.map((item, index) => (
        <ul key={index}>
          <ExperienceTitle
            company={item.company}
            text={item.role}
            place={item.address}
            year={item.year}
          />
          {item.description.map((subItem) => (
            <li
              key={subItem}
              dangerouslySetInnerHTML={{
                __html: subItem,
              }}
            />
          ))}
        </ul>
      ))}
    </div>
  );
};
const EducationPart = ({
  name,
  educations,
}: {
  name: string;
  educations: {
    role: string;
    school: string;
    address: string;
    time: string;
  }[];
}) => {
  return (
    <div>
      <Divider text={name} />
      {educations.map((item, index) => (
        <ul key={index}>
          <ExperienceTitle
            company={item.school}
            text={item.role}
            place={item.address}
            year={item.time}
          />
          <li>Major in Software Engineer</li>
        </ul>
      ))}
    </div>
  );
};
const OtherPart = ({ name, others }: { name: string; others: string[] }) => {
  return (
    <div>
      <Divider text={name} />
      <ul>
        {others.map((item) => {
          return (
            <li
              key={item}
              dangerouslySetInnerHTML={{
                __html: item,
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};
const ProjectPart = ({
  name,
  projects,
  viewMore,
}: {
  name: string;
  projects: {
    name: string;
    description: string[];
  }[];
  viewMore: string;
}) => {
  return (
    <div>
      <Divider text={name} />
      {projects.map((item, index) => (
        <ul key={index}>
          <ExperienceTitle company="" text={item.name} place="" year="" />
          {item.description.map((subItem) => (
            <li
              key={subItem}
              dangerouslySetInnerHTML={{
                __html: subItem,
              }}
            />
          ))}
        </ul>
      ))}
      <a
        style={{
          marginLeft: "35px",
          fontSize: "12px",
          color: "white",
          textDecoration: "underline",
        }}
        href="https://portfolio-vinhandev.vercel.app/"
      >
        {viewMore}
      </a>
    </div>
  );
};

export interface DataPayload {
  config: {
    skillLabel: string;
    experiences: string;
    educations: string;
    projects: string;
    others: string;
    viewMore: string;
    introduceLabel: string;
  };
  name: string;
  introduce: string;
  portfolioLink: string;
  phoneLink: string;
  phoneDisplay: string;
  email: string;
  githubLink: string;
  linkedin: string;
  skills: string[];
  experiences: {
    role: string;
    company: string;
    address: string;
    year: string;
    description: string[];
  }[];
  educations: {
    role: string;
    school: string;
    address: string;
    time: string;
  }[];
  projects: {
    name: string;
    description: string[];
  }[];
  others: string[];
}

function App() {
  const [isEnglish, setIsEnglish] = useState(true);

  const englishData: DataPayload = {
    config: {
      skillLabel: "Skills",
      educations: "Educations",
      experiences: "Experiences",
      others: "Others",
      projects: "Projects",
      viewMore: "View More",
      introduceLabel: "About",
    },
    name: "Trần Vĩ Nhân",
    introduce:
      "Hello there, My name is Trần Vĩ Nhân, and I am an experienced programmer with 1.5 years of hands-on experience in mobile app development using React Native. I already have application that appear in app store and ch play. Moreover, my skills extend beyond mobile app development, as I can code in both backend and frontend coding with Nodejs, Reactjs or Java. Over the course of my career, I have gained expertise in working with blockchain technologies, Solidity and Unity. I am eager to continue learning and growing in my field, which is why I am seeking a competitive and supportive work environment that fosters continuous learning and offers opportunities to explore new horizons.",
    email: "vinhan.dev@gmail.com",
    githubLink: "https://github.com/tranvinhan2k",
    linkedin: "https://www.linkedin.com/in/nhan-tran-582005278/",
    phoneDisplay: "0362017512",
    phoneLink: "0362017512",
    portfolioLink: "https://portfolio-vinhandev.vercel.app/",
    skills: [
      "React Native | HTML | CSS | Javascript | Typescript | Node | React | Redux | Redux Saga | Git",
      " C# | .NET | JAVA | Solidity | Unity | Android Java | Swift | Android | Xcode | Mobile Development",
      "Docker | Cryptocurrency | Blockchain | Microservices | Frontend | Backend | Full-Stack | English, Japanese",
    ],
    experiences: [
      {
        role: "Software Engineer",
        address: "Ho Chi Minh City",
        company: "FDSSoft",
        description: [
          `Developed login functionalities for Google, Facebook, and Apple accounts, built the iOS version of the app, configured app content for review on the Apple Developer and edited some features in the Unity source code for <a  href=https://www.talentiveapp.com/ target="_blank">Talentive</a>.`,
          `Led and developed mobile versions for the <a href=https://www.talentiveapp.com/>TalentIdo</a> project. Configured and submitted both <a target="_blank" href=https://play.google.com/store/apps/details?id=com.talentido.mobile>Android</a> and <a target="_blank" href=https://apps.apple.com/app/talentido/id1658689767>IOS</a> versions for review. Both applications are now available on the <a target="_blank" href=https://play.google.com/store/apps/details?id=com.talentido.mobile>Google Play</a> and <a target="_blank" href=https://apps.apple.com/app/talentido/id1658689767>App Store</a>.`,
          `Enhanced NFT marketplace with token trading functionality, added buying and selling of cryptocurrencies. Experienced in integrating Stripe for secure payment processing. Updated facial recognition and credential verification features. Upgraded website interface in two website <a target="_blank" href=https://talentido.com/main>talentido.com</a> and <a target="_blank" href=https://talentido.io/>talentido.io</a>.`,
          `Developed customer's interface and navigation functionalities, google map for a mobile app project offering truck rental services <a target="_blank" href=https://365fds.com/>365FDS</a>.`,
        ],
        year: "MAR 2022 - JUN 2023",
      },
      {
        role: "Software Engineer, Intern",
        address: "Ho Chi Minh City",
        company: "FPT Software",
        description: [
          `Designed an interactive demo interface for an e-commerce website and a diagnostic interface for a dental clinic in Japan. Using Reactjs`,
          `Implemented logging functionality and contributed to interface tasks for the team's project. Using React, Node.js, and JavaScript.`,
        ],
        year: "MAY 2021 - AUG 2021",
      },
    ],
    educations: [
      {
        role: "Bachelor of Software Engineer",
        address: "Ho Chi Minh City",
        school: "FPT University",
        time: "NOV 2018 - MAR 2022",
      },
    ],
    others: [
      "2010 - Achieved third prize in office informatics of Binh Duong Province.",
      "2012 - Awarded with encouragement prize for excellence stuudent of Informatics of Binh Duong Province.",
      "English Proficiency Certificate equivalent to IELTS 6.0",
    ],
    projects: [
      {
        name: "MiSmart",
        description: [
          "Link Demo: <a href='http://103.173.155.221:3000/' target='_blank x'>http://103.173.155.221:3000</a>",
          "Developed a website that connects tutors with instructors in the field of information technology. Empowered tutors to utilize the platform as a Learning Management System (LMS) to facilitate teaching and learning activities.",
        ],
      },
    ],
  };
  const vietnameseData: DataPayload = {
    config: {
      skillLabel: "Skills",
      educations: "Educations",
      experiences: "Experiences",
      others: "Others",
      projects: "Projects",
      viewMore: "Xem thêm",
      introduceLabel: "Introduce",
    },
    name: "Trần Vĩ Nhân",
    introduce:
      "Tên tôi là Trần Vĩ Nhân, và tôi là một lập trình viên có kinh nghiệm với 1.5 năm thực tiễn trong việc phát triển ứng dụng di động bằng React Native. Tôi đã thành công trong việc phát triển các ứng dụng đã xuất hiện trên cả App Store và Google Play.  Ngoài khả năng vững vàng trong việc phát triển ứng dụng di động, tôi còn am hiểu và có kỹ năng phát triển cả phần backend và frontend với Node.js, React.js hoặc Java. Từng bước đi trong sự nghiệp, tôi đã có được sự chuyên môn trong công nghệ blockchain, đặc biệt là Solidity, và tôi cũng thành thạo Unity. Điều thú vị khiến tôi luôn hăng hái là sự khao khát học hỏi và phát triển bản thân trong lĩnh vực này. Đó là lý do tại sao tôi đang tìm kiếm một môi trường làm việc cạnh tranh và hỗ trợ, nơi tạo điều kiện liên tục học hỏi và cung cấp cơ hội khám phá những điều mới mẻ. Tôi tin rằng khả năng kỹ thuật của mình, kết hợp với tính tò mò và thân thiện, sẽ là đóng góp quan trọng cho bất kỳ dự án hay nhóm công việc nào. Tôi thực sự háo hức với viễn cảnh được gia nhập một tổ chức sáng tạo, chung tay xây dựng sự đam mê với công nghệ và tạo điều kiện để phát triển cá nhân và chuyên môn. Cám ơn vì đã xem xét đơn của tôi. Tôi rất mong muốn đối mặt với những thử thách mới và đóng góp mạnh mẽ cho thành công của những dự án tương lai của chúng ta.",
    email: "vinhan.dev@gmail.com",
    githubLink: "https://github.com/tranvinhan2k",
    linkedin: "https://www.linkedin.com/in/nhan-tran-582005278/",
    phoneDisplay: "83262017512",
    phoneLink: "84362017512",
    portfolioLink: "https://portfolio-vinhandev.vercel.app/",

    skills: [
      "HTML | CSS | Javascript | Typescript | C++ | MSSQL | Node | React |Redux | Redux Saga | React Native | Git",
      " C# | .NET | JAVA | Solidity | Unity | Android Java | Swift | Android | Xcode | Mobile Development",
      "Docker | Cryptocurrency | Blockchain | Microservices | Frontend | Backend | Full-Stack | English, Japanese",
    ],
    experiences: [
      {
        role: "Software Engineer",
        address: "Ho Chi Minh City",
        company: "FDSSoft",
        description: [
          ` Làm chức năng đăng nhập Apple, Google, Facebook và phụ trách việc cấu
        hình và triển khai phiên bãn IOS cho dự án
        <a target="_blank" href={"https://www.talentiveapp.com/"}>
          
          Talentive
        </a>`,
          ` Thiết kế và phát triển phiên bản di động cho dự án
        <a target="_blank" href={"https://www.talentiveapp.com/"}>
          
          TalentIdo
        </a>
        . Cấu hình và triển khai phiên bản
        <a
          target="_blank"
          href={
            "https://play.google.com/store/apps/details?id=com.talentido.mobile"
          }
        >
          
          Android
        </a>
        và phiên bản
        <a target="_blank" href={"https://www.talentiveapp.com/"}>
          
          IOS
        </a>
        cho TalentIDO`,
          `Thiết kế và dev chính cho 2 trang web
        <a target="_blank" href={"https://talentido.com/main"}>
          
          talentido.com
        </a>
        và
        <a target="_blank" href={"https://talentido.io/"}>
          talentido.io
        </a>`,
          ` Mobile Development cho
        <a target="_blank" href={"https://365fds.com/"}>
          365FDS
        </a>
        Mobile Development`,
        ],
        year: "MAR 2022 - JUN 2023",
      },
      {
        role: "Software Engineer, Intern",
        address: "Ho Chi Minh City",
        company: "FPT Software",
        description: [
          `Làm giao diện demo cho website bán hàng và chuẩn đoán bệnh cho phòng
        khám nha khoa bên Nhật.`,
          `  Làm chức năng ghi log, và một số task giao diện cho project của team.
        Sử dụng ngôn ngữ React, Nodejs, Javascript`,
        ],
        year: "MAY 2021 - AUG 2021",
      },
    ],
    educations: [
      {
        role: "Bachelor of Software Engineer",
        address: "Ho Chi Minh City",
        school: "FPT University",
        time: "NOV 2018 - MAR 2022",
      },
    ],
    others: [
      "2010 - Đạt giải ba tin học văn phòng trường nghề Bình Dương",
      "2012 - Đạt giải khuyến khích học sinh giỏi Tin tỉnh Bình Dương",
      "Chứng chỉ Tiếng Anh tương đương IELTS 6.0",
    ],
    projects: [
      {
        name: "MiSmart",
        description: [
          "Link Demo: <a href='http://103.173.155.221:3000/' target='_blank x'>http://103.173.155.221:3000</a>",
          "Website kết nối gia sư với giảng viên khối ngành công nghệ thông tin. Cho phép gia sư sử dụng website như một website LMS hỗ trợ việc dạy học",
          "Ngôn ngữ sử dụng: Reactjs, Redux, Nodejs, SpringBoot",
        ],
      },
    ],
  };

  const data = isEnglish ? englishData : vietnameseData;

  return (
    <div
      style={{
        paddingLeft: "30px",
        paddingRight: "30px",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <HeaderName
        name={data.name}
        isEnglish={isEnglish}
        setIsEnglish={setIsEnglish}
      />
      <ContactInformation
        email={data.email}
        githubLink={data.githubLink}
        linkedin={data.linkedin}
        phoneLabel={data.phoneDisplay}
        phoneLink={data.phoneLink}
        portfolioLink={data.portfolioLink}
      />
      <IntroducePart
        name={data.config.introduceLabel}
        introduce={data.introduce}
      />
      <SkillPart name={data.config.skillLabel} skills={data.skills} />
      <ExperiencesPart
        name={data.config.experiences}
        experiences={data.experiences}
      />
      <EducationPart
        name={data.config.educations}
        educations={data.educations}
      />
      <ProjectPart
        name={data.config.projects}
        projects={data.projects}
        viewMore={data.config.viewMore}
      />
      <OtherPart name={data.config.others} others={data.others} />
    </div>
  );
}

export default App;
