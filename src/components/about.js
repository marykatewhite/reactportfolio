import React from "react";
import "../App.css";
import myFace from "/images/vcool.jpg";

function About() {
    return (
        <div className="container-fluid" id="aboutMe">
        <div className="row">
            <div className="col-xs-12 col-md-4 offet-md-1">
                <img src={process.env.PUBLIC_URL + myFace} id="myFace" alt="Mary Kate White" />
            </div>
            <div className="col-xs-12 col-md-7">
                <p id="bioText">I am Mary Kate White, a media specialist and team manager with more than 10 years of
                    experience. I have worked as an editor, designer and manager for newspapers, magazines, blogs and
                    marketing departments in China and the United States since 2010.<br /><br />
                    我是白茉莉，一名媒体专家和团队经理，有10多年的工作经验。从2010年起，我在中国和美国的报纸、杂志、博客和营销部门担任编辑、设计师和经理。<br /><br />
                    I am currently looking for opportunities to use my expertise in communications, marketing and web
                    development to help businesses grow in English- and Chinese-speaking markets.<br /><br />
                    我目前正在寻找机会，利用我在沟通，营销和网页设计方面的专业知识，帮助企业在英语市场和汉语市场发展<br /><br />
                    <a href="/resume"><b>My resume/我的简历</b></a>
                </p>
            </div>
        </div>
    </div>
    );
  }
  
  export default About;