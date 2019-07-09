<template>
  <div class="page">
    <div class="row page-row">
      <div class="col col-left">
        <div class="center">
          <img class="profile-photo"
               src="../assets/images/lkononenko-400x400.jpg">
        </div>
        Contacts

        <h2><span>Certificates/Courses</span></h2>
        <ul>
          <li>Stakeholder Management for PO @ Prowareness</li>
          <li>Professional Cloud Solutions Architect @ Global Knowledge</li>
        </ul>
      </div>
      <div class="col col-right">
        <h1>Liubov <span>Kononenko</span></h1>
        <p>
          Motivated and result-oriented professional with over 9 years of commercial Software Development experience
          in an Agile environment, mostly focused on eCommerce projects. Combining technical knowledge with business
          and project management skills. Fast and eager learner, not intimidated by complex challenges,
          strong communicator, resilient and driven even when things get tough. Passionate for technologies,
          innovations  and sport (have my favourite Adidas shoes ;) Love working with a team and have a joint
          feeling of accomplishment.
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
          <a href="https://www.kpn.com" target="_blank">KPN</a>
          <span> - Dutch landline and mobile telecommunications company</span>
        </h4>
        <div class="block">
          <p class="text-strong">March 2017 – present<span class="degree">Lead Frontend Developer/Technical Product Owner</span></p>
          <p>Member of the eCommerce team with Agile (Scrum) working setup, responsible for the online shop and shared Checkout platform.
            Focused on providing one shop for all consumer KPN products improving customer experience and cross/up-sell.</p>
          <p>Achievements:</p>
          <ul>
            <li>Created one shared checkout for all KPN products there by improving customer experience and increasing
              amount of orders with 15%. Design an architecture of new platform, setting up user stories based on
              requirements and hands-on helped with the development.</li>
            <li>Member of Taskforce to built one single shop for all KPN products, with the main aim to make sure
              customers can buy different types of products in one flow. Main responsibility was to ensure the technical
              and business feasibility of the project. First slice of the single shop is currently live.</li>
          </ul>
          <p>Key responsibilities:</p>
          <ul>
            <li>Manage stakeholders and gather, define and clarify business requirements.</li>
            <li>Create user stories and manage the product backlog.</li>
            <li>Align and solve dependencies with multiple cross-functional teams.</li>
            <li>Evaluate resumes and interview candidates for the eCommerce team.</li>
            <li>Mentor new Frontend Developer team members.</li>
            <li>Design the architecture of frontend applications, build new features based on requirements and ensure system consistency.</li>
            <li>Set up and evaluate A/B tests.</li>
            <li>Develop a roadmap for Single Shop.</li>
            <li>Perform code reviews for other team members, deployment and release management.</li>
          </ul>
        </div>
        <h4 class="company">
          <a href="https://www.softheme.com" target="_blank">Softheme</a>
          <span> - Software Development outsourcing company</span>
        </h4>
        <div class="block">
          <p class="text-strong">July 2016 – March 2017<span class="degree">Senior Frontend Developer</span></p>
          <p>Main project is https://pushfor.com - a secure content sharing platform with unique social features.
            Main responsibilities were design the architecture and develop web application using Angular2 framework
            with TypeScript, increased the performance of the website, perform code reviews for other team members.</p>
        </div>
        <div class="block">
          <p class="text-strong">August 2012 – July 2016<span class="degree">Full Stack Software Developer</span></p>
          <p>Development various type of projects (eCommerce, websites, applications) for worldwide customers.
            Projects from scratch as well as maintenance and development mature projects.</p>
          <p>Main projects and responsibilities:</p>
          <ul>
            <li>HR and social payment: design and development of the web project from scratch, implementing payments
              flow using PayPal and Stripe APIs.</li>
            <li>Online store: development of the eCommerce project based on Magento system.</li>
            <li>Social iPhone App: providing API and development web admin panel, web-statistics.</li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstPage',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/styles/main.scss';

  /*h3 {*/
  /*  margin: 40px 0 0;*/
  /*}*/
  /*ul {*/
  /*  list-style-type: none;*/
  /*  padding: 0;*/
  /*}*/
  /*li {*/
  /*  display: inline-block;*/
  /*  margin: 0 10px;*/
  /*}*/
  /*a {*/
  /*  color: #42b983;*/
  /*}*/



  .row {
    display: flex;
    flex-direction: row;
    width: 100%;

    @include breakpoint-down(md) {
      flex-direction: column;
    }
  }
/*
  .col {
    display: flex;
    flex-direction: column;

    &.centered {
       justify-content: center;
     }
  }
*/
  h1 {
    text-align: center;

    span {
      color: $color-brand-2;
    }
  }

  .page {
    @include breakpoint-up(md) {
      width: 210mm;
      height: 297mm;
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
      padding: 3*$margin;
    }

    &-left {
      background-color: $color-brand-bg;

      @include breakpoint-up(md) {
        width: 30%;
      }

      h2 span {
        background-color: $color-brand-bg;
      }

      ul {
        padding-left: 15px;
      }
    }

    &-right {
      @include breakpoint-up(md) {
        width: 70%;
      }
    }
  }

  hr {
    width: 100%;
    border-top: 1px solid $color-brand;
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

  .degree {
    font-style: italic;
    margin-left: 25px;
  }

  .company {

    span {
      @include font-size($base-font-sizes);
      font-weight: normal;
    }
  }
</style>
