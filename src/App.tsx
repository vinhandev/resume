import "./App.css";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/CloudDownload";
import avatar from "./assets/about_image.jpg";
import cv from "./assets/REACTJS_TRAN_VI_NHAN.pdf";
const HeaderName = ({ name }: { name: string }) => {
  return (
    <Stack
      sx={{
        backgroundRepeat: "no-repeat",
        background:
          "url(https://images.pexels.com/photos/1102797/pexels-photo-1102797.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <Stack
        sx={{
          height: "250px",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(5px)",
          background: "#000000AA",
          width: "100%",
          flexDirection: "row",
        }}
      >
        <Box
          src={avatar}
          sx={{
            transition:'all 500ms ease',
            height: {xs:"120px",md:"150px"},
            width: undefined,
            aspectRatio: 1,
            borderRadius: 1000,
            boxShadow: 1,
            objectFit: "cover",
          }}
          component={"img"}
        />
        <Stack marginLeft={1}>
          <Typography
            sx={{
              fontSize: { xs: "40px", sm: "60px" },
              fontFamily: "Josefin Sans",
              margin: 0,
              textAlign: "center",
              color: "white",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Dosis",
              fontSize: { xs: "20px", sm: "30px" },
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
            }}
          >
            FE/MOBILE/BE DEVELOPER
          </Typography>
          <Typography
            sx={{
              fontFamily: "Dosis",
              fontSize: { xs: "15px", md: "20px" },
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
            }}
          >
            CORE SKILLSET:{" "}
            <span
              style={{
                color: "#279EFF",
              }}
            >
              {" "}
              REACTJS | REACT NATIVE
            </span>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
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
            fontSize: "20px",
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
    <Stack sx={{}}>
      <Typography
        sx={{
          background: "#78C1F3",
          paddingLeft: 1,
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Dosis",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontSize: "10px",
        }}
        marginY={2}
        marginLeft={1}
      >
        {introduce}
      </Typography>
    </Stack>
  );
};
const EducationsPart = ({ name }: { name: string }) => {
  return (
    <Stack sx={{}}>
      <Typography
        sx={{
          background: "#78C1F3",
          paddingLeft: 1,
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Dosis",
        }}
      >
        {name}
      </Typography>
      <Stack marginLeft={1}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "12px",
            color: "black",
            marginTop: 1,
          }}
        >
          FPT UNIVERSITY
        </Typography>
        <Typography sx={{ fontWeight: "bold", fontSize: "10px" }}>
          Bachelor of Software Engineer
        </Typography>
        <Typography
          sx={{
            fontSize: "10px",
          }}
        >
          NOV 2018 - MAR 2022
        </Typography>
      </Stack>
    </Stack>
  );
};
const ContactsPart = ({ name }: { name: string }) => {
  return (
    <Stack>
      <Typography
        sx={{
          background: "#78C1F3",
          paddingLeft: 1,
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Dosis",
        }}
      >
        {name}
      </Typography>
      <Stack marginLeft={1}>
        <Typography
          sx={{
            fontSize: "10px",
            fontWeight: "bold",
          }}
          marginTop={1}
        >
          EMAIL
        </Typography>
        <Typography
          sx={{
            fontSize: "10px",
          }}
        >
          vinhan.dev@gmail.com
        </Typography>
        <Typography
          sx={{
            fontSize: "10px",
            fontWeight: "bold",
          }}
          marginTop={1}
        >
          PHONE NUMBER
        </Typography>
        <Typography
          sx={{
            fontSize: "10px",
          }}
        >
          0362017512
        </Typography>
        <Typography
          marginTop={1}
          sx={{
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          PORFOLIO
        </Typography>
        <Typography
          sx={{
            fontSize: "10px",
          }}
        >
          <a href="https://portfolio-vinhandev.vercel.app">
            https://portfolio-vinhandev.vercel.app
          </a>
        </Typography>
        <Typography
          marginTop={1}
          sx={{
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          GITHUB
        </Typography>
        <Typography
          sx={{
            fontSize: "10px",
          }}
        >
          <a href="https://github.com/tranvinhan2k">
            https://github.com/tranvinhan2k
          </a>
        </Typography>
        <Typography
          marginTop={1}
          sx={{
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          ADDRESS
        </Typography>
        <Typography
          sx={{
            fontSize: "10px",
          }}
        >
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
          <li
            style={{
              fontFamily: "Roboto",
            }}
            key={item}
            dangerouslySetInnerHTML={{
              __html: item,
            }}
          />
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
        fontFamily: "Dosis",
        justifyContent: "space-between",
      }}
    >
      <p
        style={{
          margin: 0,
          padding: 0,
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
            fontWeight: "bold",
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
              style={{
                fontFamily: "Roboto",
              }}
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

const ProjectPart = ({
  name,
  projects,
}: {
  name: string;
  projects: {
    name: string;
    description: string[];
  }[];
}) => {
  return (
    <div>
      <Divider text={name} />
      {projects.map((item, index) => (
        <ul key={index}>
          <ExperienceTitle company="" text={item.name} place="" year="" />
          {item.description.map((subItem) => (
            <li
              style={{
                fontFamily: "Roboto",
              }}
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

  const data = englishData;

  const downloadCV = () => {
    window.open(cv);
  };

  return (
    <Stack
      sx={{
        position: "relative",
        background: "linear-gradient(297deg, #1d1e22 10%, #252B48 100%);",
      }}
    >
      <Button
        onClick={downloadCV}
        startIcon={<FileDownloadIcon />}
        variant="contained"
        sx={{
          transition: "all 1000ms ease",
          background: "#164B60",
          borderRadius: "20px",
          paddingX: 2,
          paddingY: 1,
          position: "fixed",
          right: "20px",
          bottom: "20px",
          boxShadow: 1,
          ":hover": {
            background: "#4FC0D0",
          },
        }}
      >
        <Typography>Download</Typography>
      </Button>
      <Stack
        sx={{
          transition: "all 500ms ease",
          boxShadow: 2,
          marginX: { xs: "0", md: "100px", lg: "200px", xl: "350px" },
          marginY: { xs: "0", md: "60px" },
        }}
      >
        <Stack>
          <HeaderName name={data.name} />
        </Stack>
        <Grid
          container
          sx={{
            background: "#eff3f6",
          }}
        >
          <Grid item xs={12} sm={4} md={4} lg={3} sx={{ background: "#fff" }}>
            <Stack padding={2}>
              <IntroducePart
                name={data.config.introduceLabel}
                introduce={data.introduce}
              />
              <Stack marginTop={1}>
                <ContactsPart name={"Contact"} />
              </Stack>

              <Stack marginTop={1}>
                <EducationsPart name={data.config.educations} />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={9}>
            <Stack padding={3}>
              <SkillPart name={data.config.skillLabel} skills={data.skills} />
              <ExperiencesPart
                name={data.config.experiences}
                experiences={data.experiences}
              />
              <ProjectPart
                name={data.config.projects}
                projects={data.projects}
              />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}

export default App;
