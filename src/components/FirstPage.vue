<template>
  <div class="page">
    <div class="row page-row">
      <div class="col col-left">
        <div class="center">
          <img class="profile-photo"
               src="../assets/images/lkononenko-400x400.jpg">
        </div>
        <div class="block contact">
          <div class="flex-row">
            <ui-icon
                name="calendar"
                class="icon"
                size="lg" />
            <span>Aug 22, 1990</span>
          </div>
          <div class="flex-row">
            <ui-icon
                name="location"
                class="icon"
                size="lg" />
            <span>Amsterdam, The Netherlands</span>
          </div>
          <div class="flex-row">
            <ui-icon
                name="mobiel"
                class="icon"
                size="lg" />
            <span><a href="tel:+31651486075">+31651486075</a></span>
          </div>
          <div class="flex-row">
            <ui-icon
                name="envelop"
                class="icon"
                size="lg" />
            <span><a href="mailto:liubov.kononenko@gmail.com">liubov.kononenko@gmail.com</a></span>
          </div>
          <div class="flex-row">
            <ui-icon
                name="linkedin"
                class="icon"
                size="lg" />
            <span><a href="http://linkedin.com/in/lakononenko" target="_blank">http://linkedin.com/in/lakononenko</a></span>
          </div>
          <div class="flex-row">
            <ui-icon
                name="internet"
                class="icon"
                size="lg" />
            <span><a href="https://lkononenko.github.io/cv/" target="_blank">https://lkononenko.github.io/cv</a></span>
          </div>
        </div>

        <div class="block">
          <h2><span>Certificates/Courses</span></h2>
          <ul>
            <li>2019 - AWS Solution Architect – Associate @ Global Knowledge </li>
            <li>2019 - <a href="./files/pspo.pdf" target="_blank">Professional Scrum Product Owner (PSPO I)</a> @ Scrum.org</li>
            <li>2018 - Professional Cloud Solutions Architect @ Global Knowledge</li>
            <li>2018 - Stakeholder Management for PO @ Prowareness</li>
          </ul>
        </div>

        <!--
        <div class="block">
          <h2><span>Technical expertise</span></h2>
          <ul class="tags">
            <li>JavaScript</li>
            <li>Vue.js</li>
            <li>Angular2+</li>
            <li>Ruby</li>
            <li>PHP</li>
            <li>Yii2</li>
            <li>Magento</li>
            <li>Ruby on Rails</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>AWS</li>
            <li>Jenkins</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>A/B testing</li>
            <li>Optimizely</li>
            <li>Tag Management</li>
          </ul>
        </div>
        -->

        <div class="block">
          <h2><span>Technical expertise</span></h2>
          <ul>
            <li>
              <strong>Programming Languages</strong>
              <ul class="tags">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Ruby</li>
                <li>PHP</li>
              </ul>
            </li>
            <li>
              <strong>Frameworks/Platforms</strong>
              <ul class="tags">
                <li>Vue.js</li>
                <li>Nuxt.js</li>
                <li>Angular2+</li>
                <li>Yii2</li>
                <li>Ruby on Rails</li>
                <li>Magento</li>
              </ul>
            </li>
            <li>
              <strong>Web Technologies</strong>
              <ul class="tags">
                <li>HTML5</li>
                <li>CSS</li>
                <li>Sass (SCSS)</li>
                <li>RESTful API</li>
                <li>Server-Side Rendering</li>
              </ul>
            </li>
            <li>
              <strong>Databases</strong>
              <ul class="tags">
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </li>
            <li>
              <strong>Deployment</strong>
              <ul class="tags">
                <li>Kubernetes</li>
                <li>Jenkins</li>
                <li>AWS Services</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="block">
          <h2><span>Languages</span></h2>
          <ul>
            <li>English</li>
            <li>Dutch (Intermediate level B1)</li>
            <li>Russian</li>
            <li>Ukrainian</li>
          </ul>
        </div>
        <div class="pagebreak" style="height: 5px;"/>

        <div class="block">
          <h2><span>Awards/Leadership</span></h2>
          <ul>
            <li>2013 - awarded the nominal scholarship from the President of Ukraine for achieved academic successes,
              written and published 9 scientific articles - more information <a href="https://kpi.ua/1302-1" target="_blank">https://kpi.ua/1302-1</a>
              (translate to English <a href="https://tinyurl.com/y3hj4ywd" target="_blank">https://tinyurl.com/y3hj4ywd</a>)</li>
            <li>2011 - Winner of the Ukrainian Competition in the Telecommunication field "Professionals of the Future - 2011”</li>
            <li>2008 - 2010 - deputy head of the student council within the Institute of Telecommunication Systems</li>
            <li>2007 - 2011 - class leader at the Kyiv Polytechnic Institute</li>
          </ul>
        </div>

        <div class="block">
          <h2><span>Interests</span></h2>
          <ul class="tags">
            <li>Technology</li>
            <li>Sport</li>
            <li>Piano</li>
            <li>Traveling</li>
            <li>Yoga</li>
            <li>Dancing</li>
            <li>Sustainable innovations</li>
          </ul>
        </div>

      </div>
      <div class="col col-right">
        <h1>Liubov <span>Kononenko</span></h1>
        <p>
          Motivated and result-oriented professional with over 9 years of commercial Full Stack Software Development experience
          in an Agile environment, mostly focused on Web projects. Combining technical knowledge with business
          and project management skills. Fast and eager learner, not intimidated by complex challenges, strong communicator,
          resilient and driven even when things get tough. Passionate for technologies and sustainable innovations.
        </p>

        <h2><span>Education</span></h2>
        <div class="block">
          <p class="text-strong">2011 – 2013 <span class="degree">Master's degree - Computer Science</span></p>
          <p>Institute of Telecommunication Systems<br />
            National Technical University of Ukraine 'Kyiv Polytechnic Institute' (https://kpi.ua/en)</p>
        </div>
        <div class="block">
          <p class="text-strong">2007 – 2011 <span class="degree">Bachelor's degree - Computer Science</span></p>
          <p>Institute of Telecommunication Systems<br />
            National Technical University of Ukraine 'Kyiv Polytechnic Institute' (https://kpi.ua/en)</p>
          <p>In <strong>2010</strong> - High potential exchange program with the Technische Universität Dresden to represent the Kyiv
            Polytechnic Institute. Top 5% of students were selected.</p>
        </div>

        <h2><span>Work Experience</span></h2>

        <h4 class="company">
          <a href="http://www.kpn.com" target="_blank">KPN</a>
          <span> (https://www.kpn.com  - Dutch landline and mobile telecommunications company)</span>
        </h4>
        <div class="block">
          <p class="text-strong">December 2018 – present<span class="degree">Technical Consultant / Software Engineer</span></p>
          <p>Member of the eCommerce team with Agile working setup, responsible for a new Single Shop platform (high complexity project) with the main aim to make sure
            customers can buy different types of products in one flow to improve customer experience and cross/up-sell. Key responsibilities:</p>
          <ul>
            <li>Started the project from scratch with a Taskforce group to design a future proof architecture and provide solutions for technical challenges.</li>
            <li>Align and solve dependencies with multiple cross-functional teams.</li>
            <li>Manage stakeholders; gather, define and clarify business requirements.</li>
            <li>Build new features based on requirements.</li>
            <li>Perform code review, deployment and release management.</li>
            <li>Evaluate resumes and interview candidates for the eCommerce team.</li>
          </ul>
          <p>Technology Stack: JavaScript, Vue.js (Nuxt.js with server-side rendering), Node.js, npm, Webpack, HTML, Sass, Jenkins, Kubernetes, T-Cloud, moving to AWS.</p>
        </div>
        <div class="block">
          <p class="text-strong">March 2017 – December 2018<span class="degree">Lead Frontend Developer</span></p>
          <p>Created one shared eCommerce Checkout platform for all KPN products there by improving customer experience and
            increasing amount of orders.</p>
          <p>Key responsibilities:</p>
          <ul>
            <li>Design architecture of frontend applications, build new features based on requirements and ensure system consistency.</li>
            <li>Mentor new Frontend Developer team members.</li>
            <li>Evaluate resumes and interview candidates for the eCommerce team.</li>
            <li>Perform code review, deployment and release management.</li>
          </ul>
          <p>Technology Stack: TypeScript, Angular 5, npm, Webpack, HTML, Sass, Storybook, Jenkins , Kubernetes, T-Cloud.</p>
        </div>

        <h4 class="company">
          <a href="https://www.softheme.com" target="_blank">Softheme</a>
          <span> (https://www.softheme.com - Software Development outsourcing company)</span>
        </h4>
        <div class="block">
          <p class="text-strong">July 2016 – March 2017<span class="degree">Senior Frontend Developer</span></p>
          <p>The project https://pushfor.com - secure content sharing platform with unique social features.</p>
          <div class="pagebreak" />
          <p>Key responsibilities:</p>
          <ul>
            <li>Design the architecture and develop web application, build new features based on requirements.</li>
            <li>Perform code review for other team members</li>
          </ul>
          <p>Technology Stack: TypeScript, Angular 2, npm, Webpack, HTML, Sass, Jenkins .</p>
        </div>
        <div class="block">
          <p class="text-strong">August 2012 – July 2016<span class="degree">Full Stack Software Developer</span></p>
          <p>Developed various type of projects (eCommerce, websites, applications) on client and server-side for worldwide customers.</p>
          <p>Main projects and responsibilities:</p>
          <ul>
            <li>HR and Payment systems: design and development of the web projects, implement payments flow using PayPal and Stripe APIs.</li>
            <li>Social App: building API for external systems; development web admin panel, web statistics.</li>
            <li>Online store: development of the eCommerce project based on the Magento platform.</li>
          </ul>
          <p>Technology Stacks: Ruby (Ruby on Rails), PHP (Yii2), Magento , PostgreSQL, MongoDB, Javascript, jQuery, HTML, CSS.</p>
        </div>
        <div class="block">
          <p class="text-strong">May 2011 – August 2012<span class="degree">Junior Web Developer</span></p>
          <p>Web development based on CMSs, responsive web design, development of new plugins and modules.</p>
          <p>Technology Stacks: Javascript, jQuery, HTML, CSS, PHP, MySQL, Drupal, Wordpress.</p>
        </div>

        <div class="block">
          <h2><span>Volunteering</span></h2>
          <ul>
            <li>Workshops - Teach fundamentals of Frontend Development for non-Developers (Taste of Code) at KPN.</li>
            <li style="text-align: left;">Volunteer at The Next Web conference 2019 - more information
              <a href="https://tinyurl.com/y52baov6" target="_blank">https://tinyurl.com/y52baov6</a>.</li>
            <li>Organising and presenting at Women Frontend Developer Meetup.</li>
            <li>Part of the Tech support team for the ADE Hackathon.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import UiIcon from './Icon';

  export default {
    name: 'FirstPage',
    components: {
      UiIcon
    }
  }
</script>

<style scoped lang="scss">
  @import '../assets/styles/main.scss';

  .row {
    display: flex;
    flex-direction: row;
    width: 100%;

    @include breakpoint-down(md) {
      flex-direction: column;
    }
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: $margin 0;
  }

  h1 {
    text-align: center;

    span {
      color: $color-brand-2;
    }
  }

  .page {
    @include breakpoint-up(md) {
      width: 210mm;
      margin: 0 auto;
      border: 1px solid $color-gray-30;
    }

    &-row {
      position: relative;
      height: 100%;
    }
  }

  .col {
    padding: $margin;

    @include breakpoint-up(md) {
      padding: 2*$margin;
    }

    &-left {
      background-color: $color-brand-bg;

      @include breakpoint-up(md) {
        width: 35%;
      }

      h2  {
        margin-top: 3*$margin;

        span {
          background-color: $color-brand-bg;
        }
      }

      ul {
        padding-left: 15px;

        li {
          text-align: left;
        }
      }
    }

    &-right {
      @include breakpoint-up(md) {
        width: 65%;
      }
    }
  }


  .block {
    margin: 1.5*$margin 0;
  }

  .profile-photo {
    max-width: 100%;
    width: 150px;
    text-align: center;
    border: 2px solid #fff;
    box-shadow: inset 0 1.5px 3px 0 rgba(0,0,0,.15), 0 1.5px 3px 0 rgba(0,0,0,.15);
    border-radius: 50%;
  }

  .icon {
    margin-right: $margin;
    fill: $color-brand-2;
  }

  .degree {
    /*font-style: italic;*/
    margin-left: 25px;
  }

  .company {

    span {
      @include font-size($base-font-sizes);
      font-weight: normal;
    }
  }

  // for print and PDF
  @media print {
    h2 {
      margin: 18px 0;
    }

    .pagebreak {
      page-break-before: always;
      height: 2*$margin;
      display: block;
    }

    .row {
      display: block;
    }
    .page {
      width: 793px;
      margin: 0;
      padding: 0;
    }

    .col {
      float: left;
      padding: 2*$margin;
    }
    .col-left {
      width: 250px;
      background: $color-brand-bg;
      height: 2200px; // 2 * A4 pages
    }
    .col-right {
      width: 462px;
    }
  }
</style>
