import { useState } from "react";
import "./App.css";
import { Box, Grid, Stack, Typography } from "@mui/material";
import avatar from './assets/about_image.jpg'
const HeaderName = ({
  name,
}: {
  name: string;
}) => {
  return (
    <Stack
      sx={{
        backgroundRepeat:"no-repeat",
        background:'url(https://images.pexels.com/photos/1102797/pexels-photo-1102797.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
      }}
    >
  
      <Stack sx={{
        height:'250px',
        justifyContent:"center",
        alignItems:'center',
        backdropFilter:'blur(5px)',
        background:'#000000AA',
        width:"100%",
        flexDirection:'row',

      }}>
          <Box src={avatar} sx={{
          height:'150px',
          width:undefined,
          aspectRatio:1,
          borderRadius:1000,
          boxShadow:1,
          objectFit:'cover',
        }} component={'img'}/>
      <Stack marginLeft={1}>
      <h1
        style={{
          fontSize: "60px",
          fontFamily: "Josefin Sans",
          margin: 0,
          textAlign: "center",
          color:'white',
        }}
      >
        {name}
      </h1>
      <Typography sx={{
        fontFamily:'Dosis',
        fontSize:'30px',
        textAlign:'center',
        fontWeight:'bold',
        color:'white',

      }}>FE/MOBILE/BE DEVELOPER</Typography>
      <Typography 
      sx={{
        fontFamily:'Dosis',
        fontSize:'20px',
        textAlign:'center',
        fontWeight:'bold',
        color:'white',

      }}>CORE SKILLSET: <span style={{
        color:"#279EFF"
      }}> REACTJS | REACT NATIVE</span></Typography>
      </Stack>
      </Stack>
    </Stack>
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

  return (
    <div
      style={{
      }}
    >
     
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
          fontFamily: "Josefin Sans",
          fontSize:'20px',
          }}
        >
          {text}
        </a>
      </div>
      <div
        style={{
          borderBottom: "1px solid #666",
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
    <Stack sx={{
    }}>
      <Typography sx={{
         background:'#78C1F3',
         paddingLeft:1,
        fontSize:"20px",
        fontWeight:'bold',
        fontFamily:'Dosis'
      }}>{name}</Typography>
     <Typography sx={{
      fontSize:'10px',
     }} marginY={2} marginLeft={1}>{introduce}</Typography>
    </Stack>
  );
};
const EducationsPart = ({
  name,
}: {
  name: string;
}) => {
  return (
    <Stack sx={{
    }}>
      <Typography sx={{
        background:'#78C1F3',
        paddingLeft:1,
        fontSize:"20px",
        fontWeight:'bold',
        fontFamily:'Dosis'
      }}>{name}</Typography>
    <Stack marginLeft={1}>
    <Typography sx={{fontWeight:'bold',fontSize:'12px',color:'black',marginTop:1}} >FPT UNIVERSITY</Typography>
     <Typography sx={{fontWeight:'bold', fontSize:'10px',}} >Bachelor of Software Engineer</Typography>
     <Typography sx={{
      fontSize:'10px'
     }} >NOV 2018 - MAR 2022</Typography>
    </Stack>
    </Stack>
  );
};
const ContactsPart = ({
  name,
}: {
  name: string;
}) => {
  return (
    <Stack >
      <Typography sx={{
        background:'#78C1F3',
        paddingLeft:1,
        fontSize:"20px",
        fontWeight:'bold',
        fontFamily:'Dosis'
      }}>{name}</Typography>
    <Stack marginLeft={1}>
    <Typography sx={{
      fontSize:'10px',fontWeight:'bold'
     }} marginTop={1} >
        EMAIL
      </Typography>
      <Typography sx={{
      fontSize:'10px',
     }}>
      vinhan.dev@gmail.com
      </Typography>
      <Typography sx={{
      fontSize:'10px',
      fontWeight:'bold',
     }} marginTop={1} >
        PHONE NUMBER
      </Typography>
      <Typography sx={{
      fontSize:'10px',
     }}>
      0362017512
      </Typography>
      <Typography marginTop={1} sx={{
      fontSize:'10px',
      fontWeight:'bold',
     }}>
        PORFOLIO
      </Typography>
      <Typography sx={{
      fontSize:'10px',
     }}>
      <a href="https://portfolio-vinhandev.vercel.app">https://portfolio-vinhandev.vercel.app</a>
      </Typography>
      <Typography marginTop={1} sx={{
      fontSize:'10px',
      fontWeight:'bold',
     }}>
      GITHUB
      </Typography>
      <Typography sx={{
      fontSize:'10px',
     }}>
      <a href="https://github.com/tranvinhan2k">https://github.com/tranvinhan2k</a>      
      </Typography>
      <Typography marginTop={1} sx={{
      fontSize:'10px',
      fontWeight:'bold',
     }}>
      ADDRESS
      </Typography>
      <Typography sx={{
      fontSize:'10px',
     }}>
      Ho Chi Minh      
      </Typography>
    </Stack>
    </Stack>
  );
};
const SkillPart = ({ name, skills }: { name: string; skills: string[] }) => {
  return (
    <div>
      <Divider text={name} />
      <ul>
        {skills.map((item) => (
          <li style={{
            fontFamily:'Roboto'
          }} key={item} dangerouslySetInnerHTML={{
            __html:item,
          }}/>
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
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        fontFamily:'Dosis',
        justifyContent: "space-between",
      }}
    >
      <p
        style={{
          margin:0,
          padding:0,
          fontWeight: "600",
        }}
      >
        {text}
      </p>
      <p className="company">{company}</p>
      <p
        style={{
          color: "black",
          fontSize: "12px",
        }}
      >
        {place}{" "}
        <span
          style={{
            fontStyle: "normal",
            color: "black",
            fontWeight:'bold',
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
             <li style={{
              fontFamily:'Roboto'
            }} key={subItem} dangerouslySetInnerHTML={{
              __html:subItem,
            }}/>
          ))}
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
            <li style={{
              fontFamily:'Roboto'
            }} key={item} dangerouslySetInnerHTML={{
              __html:item,
            }}/>
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
            <li style={{
              fontFamily:'Roboto'
            }} key={subItem} dangerouslySetInnerHTML={{
              __html:subItem,
            }}/>
          ))}
        </ul>
      ))}
      
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
      viewMore: "View More Projects",
      introduceLabel: "About",
    },
    name: "Trần Vĩ Nhân",
    introduce:
      "Greetings, I have almost 2 years of experience in website development with ReactJS and NodeJS and in mobile development with React Native. I have already published an app on both Google Play and the App Store. ",
    email: "vinhan.dev@gmail.com",
    githubLink: "https://github.com/tranvinhan2k",
    linkedin: "https://www.linkedin.com/in/nhan-tran-582005278/",
    phoneDisplay: "0362017512",
    phoneLink: "0362017512",
    portfolioLink: "https://portfolio-vinhandev.vercel.app/",
    skills: [
      "<strong>FRONT END</strong>: REACTJS | REACT NATIVE",
      "<strong>OTHER</strong>: NODEJS | JAVA | SOLIDITY | UNITY | ANDROID | SWIFT",
      "<strong>SOFT SKILL</strong>: GIT | DOCKER | ENGLISH (IELTS 6.0) | JAPANESE",
      "Knowledge and experience working with Cryptocurrency | Blockchain , Understand microservice",
      "Problem Solving, well know SOLID method and algorithm",
    ],
    experiences: [
      {
        role: "Software Engineer",
        address: "Ho Chi Minh City",
        company: "FDSSoft",
        description: [
          `<strong>Talentive Project</strong>: Developed login functionalities for Google, Facebook, and Apple accounts, built the iOS version of the app, configured app content for review on the Apple Developer and edited some features in the Unity source code for <a  href=https://www.talentiveapp.com/ target="_blank">Talentive (https://www.talentiveapp.com) </a> mobile application using Unity.`,
          `<strong>TalentIDO Mobile Application Project</strong>: Led and developed mobile versions for the <a href=https://www.talentiveapp.com/>TalentIdo</a> mobile application using React Native. Configured and submitted both <a target="_blank" href=https://play.google.com/store/apps/details?id=com.talentido.mobile>Android</a> and <a target="_blank" href=https://apps.apple.com/app/talentido/id1658689767>IOS</a> versions for review. Both applications are now available on the <a target="_blank" href=https://play.google.com/store/apps/details?id=com.talentido.mobile>Google Play (https://play.google.com/store/apps/details?id=com.talentido.mobile)</a> and <a target="_blank" href=https://apps.apple.com/app/talentido/id1658689767>App Store (https://apps.apple.com/app/talentido/id1658689767)</a>.`,
          `<strong>TalentIDO Website Project</strong>: Enhanced NFT marketplace with token trading functionality, added buying and selling of cryptocurrencies. Experienced in integrating Stripe for secure payment processing. Updated facial recognition and credential verification features. Upgraded website interface in two website <a target="_blank" href=https://talentido.com/main>talentido.com</a> and <a target="_blank" href=https://talentido.io/>talentido.io</a> using ReactJS and NodeJS.`,
          `<strong>365FDS Mobile Application Project</strong>: Developed customer's interface and navigation functionalities, google map for a mobile app project offering truck rental services <a target="_blank" href=https://365fds.com/>365FDS</a> using React Native.`,
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
      "2010 - Achieved third prize in office informatics at Binh Duong Province.",
      "2012 - Awarded with encouragement prize for excellence student of Informatics at Binh Duong Province.",
      "English Proficiency Certificate equivalent to IELTS 6.0",
    ],
    projects: [
      {
        name: "MiSmart",
        description: [
          "Link Demo: <a href='https://mismart.vercel.app/' target='_blank x'>https://mismart.vercel.app/</a>",
          "Website connect student and tutor and support LMS for teaching process",
          "This is my capstone project in FPT University. My part is coding frontend for this website. I using ReactJS for coding this part.",
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
          "Link Demo: <a href='https://mismart.vercel.app/' target='_blank x'>https://mismart.vercel.app/</a>",
          "Website kết nối gia sư với giảng viên khối ngành công nghệ thông tin. Cho phép gia sư sử dụng website như một website LMS hỗ trợ việc dạy học",
          "Ngôn ngữ sử dụng: Reactjs, Redux, Nodejs, SpringBoot",
        ],
      },
    ],
  };

  const data = isEnglish ? englishData : vietnameseData;

  return (
      <Stack>
        <Stack>
        <HeaderName
        name={data.name}
      />
        </Stack>
        <Grid container sx={{
        background:'#eff3f6'
      }}>
      <Grid item xs={3} sx={{background:'#fff'}}>
      
     <Stack padding={2}>
     <IntroducePart
        name={data.config.introduceLabel}
        introduce={data.introduce}
      />
      <Stack marginTop={1}>
      <ContactsPart
        name={'Contact'}
      />
      </Stack>
     
      <Stack marginTop={1}>
      <EducationsPart
        name={data.config.educations}
      />
      </Stack>
     </Stack>
      </Grid>
      <Grid item xs={9}>
     
      <Stack padding={3}>
      <SkillPart name={data.config.skillLabel} skills={data.skills} />
      <ExperiencesPart
        name={data.config.experiences}
        experiences={data.experiences}
      />
      <ProjectPart
        name={data.config.projects}
        projects={data.projects}
        viewMore={data.config.viewMore}
      />
      </Stack>
      </Grid>
      </Grid>
      </Stack>

  );
}

export default App;
