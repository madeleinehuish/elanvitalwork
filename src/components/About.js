import React from 'react';
import ReactDOM from 'react-dom';
import projectPic3 from '../assets/images/profile1.jpg';
import projectPic4 from '../assets/images/profile2.jpg';
import projectPic5 from '../assets/images/profile3.jpg';
import projectPic6 from '../assets/images/profile4.jpg';
import projectPic7 from '../assets/images/profile5.jpg';
import projectPic8 from '../assets/images/profile6.jpg';
import '../styles/About.css';


class About extends React.Component {

  constructor() {
    super();
    this.scrollEvent = this.scrollEvent.bind(this);
  }

  scrollEvent(e) {
    const height = window.pageYOffset;
    const firstPic = ReactDOM.findDOMNode(this.refs.firstPic);
    const secondPic = ReactDOM.findDOMNode(this.refs.secondPic);
    // const thirdPic = ReactDOM.findDOMNode(this.refs.thirdPic);

    if (height > 200 && firstPic.classList.value.indexOf('back-opacity')  < 0) {
      firstPic.classList.add('back-opacity');
    } else if (height < 200 && firstPic.classList.value.indexOf('back-opacity')  > 0) {
      firstPic.classList.remove('back-opacity');
    }

    if (height > 1000 && secondPic.classList.value.indexOf('back-opacity')  < 0) {
      secondPic.classList.add('back-opacity');
    } else if (height < 1000 && secondPic.classList.value.indexOf('back-opacity')  > 0) {
      secondPic.classList.remove('back-opacity');
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollEvent);
    let node = ReactDOM.findDOMNode(this.refs.theAboutAnchor);

    node.scrollIntoView();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollEvent);
  }



  render() {
    return (
      <section className="backDropAbout" ref="theAboutAnchor">
        <div id="topSpacer"></div>
        <div ref="firstPic" className="background-about background-about-one back">
          <div id="titleWordsProjects">
            <h2>What is Elan Vital Solutions?</h2>
          </div>
        </div>
        <div className="sectionAbout">
          <div className="container">
            <div className="offset-by-one ten columns aboutTextBlock">
              <h5 className="h5BlockAbout">Our Story</h5>
              <p className="pAbout">Elan Vital Solutions (EVS) grew out of a common commitment between the founding families
                to provide shelter to those in need around the world. With a combined 75 years’ experience in the construction
                industry and 45 years’ experience in nonprofit administration, EVS was established on September 12, 2016 as a
                nonprofit organization in the State of Washington.</p>
            </div>

            <div className="twelve columns aboutTextBlock">
              <h5 className="h5BlockAbout">Darrel Potter - Board Chair</h5>
              <div className="container">
                <div className="row">
                  <div className="twelve columns">
                    <p className="pAbout"><img src={projectPic4} alt="Darrel V. Potter" className="darrelImage"></img>Mr. Potter, started his construction career with Landmark Homes from 1977 – 2010. He has built custom and speculative homes, commercial buildings and developed commercial and residential communities both West and East of the mountains in Washington State.
                    Most recently he changed directions and began embarking upon a “Built Green” affordable portable building product under Mainstream Building Green Alliance registered as (MHE America, LLC.). Then embarked upon Buddy Shelters, LLC. In 2012. Darrel is a member of PHBS, (Pacific HOPE Building Systems) and of MBA (Master Builder Association), SICBA (Skagit and Island County Builder Association), NAHB (National Association of Home Builders), a CGP (Certified Green Professional), is a graduate of Business Management for Building Professionals (NAHB) and a Certified AAC Specialist trained as an AAC Installation certifier. Darrel is proud to be Board Chairman of Elan Vital Solutions.
                    Darrel and Jill Potter have been married for 24 years, have 4 children and 7 grandchildren and 2 great grandchildren. The Potters live in Arlington, WA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="twelve columns aboutTextBlock">
              <h5 className="h5BlockAbout">Robert Marc Fulmer - Advisor to the Board</h5>
              <div className="container">
                <div className="row">
                  <div className="twelve columns">
                    <p className="pAbout"><img src={projectPic3} alt="Marc Fulmer" className="marcImage"></img>Marc's early career years (1966-2002) were in the construction industry, mainly focused on general contracting in light commercial tenant improvements and hospital renovations. In 2002 Marc transitioned to the nonprofit world as a founding staff member and eventual President of Agathos International working in Africa on orphan care, medical and food relief. Marc remains as Director of GIK and Medical Relief for Agathos International. Marc also serves on the board of the Persecution Project Foundation working in Southern Sudan. In 2011 in addition to his nonprofit work, Marc went to work with his partners in Thain Boatworks Inc building passenger ferries for Eastern Africa. In August of 2016 Marc began to transition into a new role with Buddy Shelters LLC as VP as well as beginning the new nonprofit with his partner Darrel Potter called Elan Vital Solutions, addressing homelessness here in the United States. Marc resides in Arlington, WA and is married to Mae Fulmer for 24 years, they have four children and 4 grandchildren.  The Fulmer’s are members of Damascus Road Church in Marysville, WA.</p>
                  </div>
                  {/* <div className="six columns imgDiv"> */}

                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="twelve columns aboutTextBlock">
              <h5 className="h5BlockAbout">Seanna Herring-Jensen - Program and Education Development</h5>
              <div className="container">
                <div className="row">
                  <div className="twelve columns">
                    <p className="pAbout"><img src={projectPic5} alt="Seanna Herring-Jensen" className="darrelImage"></img>As a grant writer and community organizer, Seanna has over 20 years of working with Veterans and those coping with homelessness, recovery issues, TBI, and severe PTSD. She has many years of creating Trauma-Informed care programming and works to integrate community partners for one-stop services, shared resources, and efficient success rates. She has created veteran service projects and programs in California, North Carolina, and now in Washington with her programs having received funding through the Veterans Administration, United Way, the California Employment Development Department (EDD), WalMart, Blue Cross Blue Shield, and many more. Seanna also has experience organizing large community and Veteran related events such as conferences, employment fairs, Stand Downs, and Point-in-Time Counts.

                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="twelve columns aboutTextBlock">
              <h5 className="h5BlockAbout">Stephen Pidgeon</h5>
              <div className="container">
                <div className="row">
                  <div className="twelve columns">
                    <p className="pAbout"><img src={projectPic8} alt="Stephen Pidgeon" className="darrelImage"></img>Stephen Pidgeon TN The founder, President, and Chief Executive Officer of Cepher Publishing Group, LLC., Dr. Stephen Pidgeon is a political scientist with a Doctorate of Philosophy, and an active attorney with a Juris Doctorate in the state of Washington. In collaboration with a group of students of scripture, he is responsible for the creation and publication of the Eth CEPHER; a comprehensive restoration of sacred scripture in the English language. Dr. Pidgeon is a student of many languages, including Greek, Hebrew, Russian, French, Spanish and Italian. An avid reader and author, he has published over 30 books in the last several years. Dr. Pidgeon has a long history of executive leadership, having formed and led companies in publishing (since 1982), journalism (1984), music publishing (1985), wireless telecommunications (1993), broadband acquisition and delivery (1996), fiber optic switching technology (1998), laser digital television development (2001), biotechnology (2004), and search engine optimization products, including the development of patented technology (2009). In 2012 Dr. Pidgeon was a candidate for Attorney General for the State of Washington. He is the recipient of the 2008 Presidential Commission, the 2008 Reagan Congressional Commission, a two-time recipient of the Congressional Medal of Distinction (2006, 2007), and a designee for the 2006 Businessman of the Year award, Dr. Pidgeon is distinguished in both Who's Who and Who's Who in Business. He is active in promoting religious freedom, economic freedom, and civil society throughout the world. Since 2008, Dr. Pidgeon has been involved in delivering a complete restoration of sacred scripture and has recently published Behold! A White Horse!, Behold! A Pale Green Horse!, and Behold! A Red Horse! Among his other works are the Yom Qodesh, Sitrei Torah, Parshat, Besor'oth, Talmidiym, and Bereshiyth, which are compilations and interpretations with Hebraic concepts of well-known and lesser-known scriptures. An accomplished musician, Dr. Pidgeon holds a degree in Piano Performance and has studied with Svetlana Velichko (Moscow Conservatory), Jean Paul Billaud (Conservatory of Paris), and Ziegfried Schultze (Editor, Schirmers). Dr. Pidgeon is also a songwriter, vocalist, guitarist, and bassist, and has recently released Prayer & Supplication, a worship CD for the Cepher Publishing Group, which features him on vocals, guitar, bass, and piano. Please use the Contact Us form if you have a question for Dr. Pidgeon or would like to invite him to speak at an upcoming gathering. Ministries Weekly Torah Portion Daily Prayers Stephen Pidgeon's Blog
2013 Who’s-Who
Mr. Stephen Pidgeon is skilled in business, litigation and political science and has written 27 books on various versions of scriptures, one fiction, three books on prophesy and numerous law books. In his current position, he is establishing the most accurate and complete English translation of sacred scriptures. He holds a JD from Lewis & Clark Law School and is pursuing a Ph.D. He was recently inducted into Worldwide Branding and also maintains affiliation with the Supreme Court of the United States. In 2012, Mr. Pidgeon was given the Legacy Award for Outstanding Service Defending Washington State Families by former Washington state legislator Ellen Craswell, and the Honor for the Commitment to Restore the Rule of Law in America. He was also given the Congressional Medal of Distinction in 2009, 2006, and 2005. He attributes his success to the hands and works of God. Looking ahead, Mr. Pidgeon plans to obtain a Ph.D. and a dominance position of sacred scriptures. For more information about Cepher Publishing Group, LLC, visit http://www.cepher.net.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="twelve columns aboutTextBlock">
              <h5 className="h5BlockAbout">Vitaliy Musiyenko </h5>
              <div className="container">
                <div className="row">
                  <div className="twelve columns">
                    <p className="pAbout"><img src={projectPic6} alt="Vitaliy Musiyenko" className="darrelImage"></img>Vitaliy Musiyenko was born on 1979 in Kiev, Ukraine. Serviced in the Soviet Union/Ukrainian Army for two-years as a sergeant. As soon as the army service ended Vitaliy entered into a two-year degree studying at the St. James Bible College and became a minister for Salvation Army. For 3.5 years Vitaliy worked with youth, adults, homeless, and people who were imprisoned. During 1997 Vitaliy immigrated into the US as a refugee.
In 2007 he founded a non-profit organization, “Hope of Freedom” that currently is a mission working in jails, prisons, and also after-care ministry with the Slavic Community here in US. One of his favorite Scripture verses that called him to this service is Proverbs 24:11,”Deliver those who are drawn toward death…” He is an active Community Leader and Advocate with a very high passion for victims of domestic violence. Last two-years he has been working under the OVW Federal Grant Engaging Men Project and produced a curriculum for the Slavic community called, “Mobilizing Men for Change: Building Strong Slavic Communities & Preventing Family Violence.” Previously was a member for the King County Task Force and also for the International Rescue Committee.
2015-2016 VOA lead Navigator, located in Everett, WA
	Vitaliy Musiyenko is currently working as an Assertive Engaging Specialist with VOA private funding; helping literally homeless families with children under 18 years of age who are currently on the waiting list for HASCO.
                  </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="twelve columns aboutTextBlock">
              <h5 className="h5BlockAbout">Irma Dewaters</h5>
              <div className="container">
                <div className="row">
                  <div className="twelve columns">
                    <p className="pAbout"><img src={projectPic7} alt="Irma Dewaters" className="darrelImage"></img>For forty years Irma has written programs that instill confidence, character, preservation, accountability and pride in accomplishments.  She worked as a Resource Specialist in Everett School.  In Trotwood, OH she served as the City Youth Council Advisor.  She helped students enter the work place through Jobs for Graduates in Dayton, OH.  Irma wrote and successfully implemented an at risk program for students who were failing classes or were uninterested in school.  Kids of Incarcerated Parents (KIP); is another program Irma wrote for Montgomery County Sheriff to use with kids whose parents are in prison.  Irma wrote a life skills program for students exiting the Foster Care system. Street kids are another group that came under Irma's life skills and job find program.  One of the most successful and effective programs Irma created is The Tike Shop, a place where kids at risk can learn to manage a retail Christmas Store. Irma graduated from Draughon's College in Texas.  She attended Yale University to learn about the Comer Project, a program when implemented properly can keep the interest of every student and can making teaching stress free. Irma was President of several local chapter PTA's in Everett, council president and served on the Washington State Board of Directors.  She was instrumental in bringing awareness to parents of drug and alcohol use among students.  She became an advocate for abused children and youth.  Her greatest accomplishment was working with Bill France in in encouraging the Washington Superintendent of Schools to write a school policy for sexual abuse. Irma volunteers at Women at the Well in Marysville and is on the board of Directors for (EVS), élan vital solutions. Irma is retired and spends her time volunteering locally, working with agencies to develop housing or shelters for Veterans, families and other needing homes and a second chance in life.  She is an experiences Grant writer and freelance writer.</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        {/* <div ref="secondPic" className="background back">
        </div> */}
        {/* <div className="section second-section">
          <div className="container">
            <h3>Our Leadership</h3>
            <a ref="africaAnchor"></a>
            <div className="row">
              <div className="six columns">
                <div >

                    <img src={projectPic3} className="profile-pictures" alt="USA projects"/>

                </div>

              </div>
              <div className="six columns">
                <div >

                    <img src={projectPic4} className="profile-pictures" alt="USA projects"/>

                </div>

              </div>
            </div>
          </div>
        </div>
        <div ref="thirdPic" className="background back"></div> */}
      </section>
      );

  }

}

export default About;
