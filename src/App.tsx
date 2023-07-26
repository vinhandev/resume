import { useState } from "react";
import "./App.css";
import { useCopyToClipboard } from "./hooks";

const HeaderName = ({ name }: { name: string }) => {
  return (
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

const SkillPart = ({ skills }: { skills: string[] }) => {
  return (
    <div>
      <Divider text="Skills" />
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
        lineHeight: 0,
        margin: 0,
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
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
      <p
        style={{
          textAlign: "center",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignSelf: "center",
        }}
      >
        {company}
      </p>
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
  experiences,
}: {
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
      <Divider text="Experiences" />
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
  educations,
}: {
  educations: {
    role: string;
    school: string;
    address: string;
    time: string;
  }[];
}) => {
  return (
    <div>
      <Divider text="Educations" />
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
const OtherPart = ({ others }: { others: string[] }) => {
  return (
    <div>
      <Divider text="Others" />
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
  projects,
}: {
  projects: {
    name: string;
    description: string[];
  }[];
}) => {
  return (
    <div>
      <Divider text="Projects" />
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
    </div>
  );
};

function App() {
  const data: {
    name: string;
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
  } = {
    name: "Trần Vĩ Nhân",
    email: "vinhan.dev@gmail.com",
    githubLink: "https://github.com/tranvinhan2k",
    linkedin: "https://www.linkedin.com/in/nhan-tran-582005278/",
    phoneDisplay: "+84 (36) 2017 512",
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
      {
        name: "HabitSnap",
        description: [
          "Link Demo: <a href='http://103.173.155.221:3000/' target='_blank x'>http://103.173.155.221:3000</a>",
          "Website kết nối gia sư với giảng viên khối ngành công nghệ thông tin. Cho phép gia sư sử dụng website như một website LMS hỗ trợ việc dạy học",
          "Ngôn ngữ sử dụng: Reactjs, Redux, Nodejs, SpringBoot",
        ],
      },
    ],
  };

  return (
    <div
      style={{
        paddingLeft: "30px",
        paddingRight: "30px",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <HeaderName name={data.name} />
      <ContactInformation
        email={data.email}
        githubLink={data.githubLink}
        linkedin={data.linkedin}
        phoneLabel={data.phoneDisplay}
        phoneLink={data.phoneLink}
        portfolioLink={data.portfolioLink}
      />
      <SkillPart skills={data.skills} />
      <ExperiencesPart experiences={data.experiences} />
      <EducationPart educations={data.educations} />
      <ProjectPart projects={data.projects} />
      <OtherPart others={data.others} />
    </div>
  );
}

export default App;
