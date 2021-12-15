<template>
  <div class="aboutMePageSettings">
    <div class="settings-header">
      <h2>About Me page settings</h2>
    </div>
    <div class="settings-body">
      <div class="profile-picture">
        <div class="picture-box" v-if="data.picture">
          <h5>Main Picture</h5>
          <img
            class="my-picture"
            :src="require(`../static/images/${data.picture}`)"
            alt="picture"
          />
          <label>
            <input type="text" class="default-inp" @change="()=> changHandler('picture')" v-model="p_picture">
          </label>
        </div>
      </div>
      <div class="profile-descriptions">
        <h5 class="">Descriptions</h5>
        <div class="descriptions-box">
          <div class="description-inp" v-for="(desc, index) in data.descriptions">
            <label>
              <input @change="()=> changHandler('descriptions')" type="text" v-model="p_descriptions[index].title">
              <textarea @change="()=> changHandler('descriptions')" name="desc" id="" cols="130" rows="10"
                        v-model="p_descriptions[index].desc"/>
            </label>
          </div>
        </div>
      </div>
      <div class="profile-workexp">
        <h5 class="text-center">Work Experiences</h5>
        <div class="workexps-box">
          <ol v-if="data">
            <li v-for="(exp, index) in data.experience" :key="index">
              <div @click="detectExp(exp.company_name)">
                <span>"{{exp.title}}" at {{exp.company_name}}</span>
                <!--
                <i v-if="selectExp" :class="icons['double-down']"/>
                <i v-else :class="icons['double-up']" />
                -->
              </div>
              <div :id="exp.company_name" class="workexps-inps">
                <label for="inp-title">
                  Title:
                  <input class="default-inp" :value="exp.title" type="text" id="inp-title">
                </label>
                <label for="inp-date">
                  Experience:
                  <input class="default-inp" :value="exp.date" type="text" id="inp-date">
                </label>
                <label for="inp-company-name">
                  Company Name:
                  <input class="default-inp" :value="exp.company_name" type="text" id="inp-company-name">
                </label>
                <label for="inp-company-website">
                  Company Web-Site:
                  <input class="default-inp" :value="exp.company_url" type="text" id="inp-company-website">
                </label>
                <label for="inp-location">
                  Location:
                  <input class="default-inp" :value="exp.location" type="text" id="inp-location">
                </label>
                <label for="inp-projects">
                  Projects:
                  <input class="default-inp" :value="exp.project[0].name" type="text" id="inp-projects">
                </label>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="p-skills">
        <br>
        <h5 class="text-center">Programming Skills</h5>
        <br>
        <ol v-if="data">
          <li class="p-skills-title"><span>Skill name:</span><span>Level:</span></li>
          <li v-for="(s, index) in data.programming_skills" class="p-skills-box">
            <input
              type="text"
              class="default-inp"
              @change="()=> changHandler('programming_skills')"
              v-model="p_programming_skills[index].skill"
            >
            <input
              type="text"
              maxlength="100"
              class="default-inp text-center"
              @change="()=> changHandler('programming_skills')"
              v-model="p_programming_skills[index].level"
            >
            <button class="btn btn-outline-danger">x</button>
          </li>
        </ol>
      </div>
    </div>
    <div class="settings-footer">
      <button class="btn default-btn" @click="saveAndPost(changedList)">
        Save
      </button>
      <button class="btn default-btn-2">
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
  const api_methods = require("../api/methods");
  const axios = require("@nuxtjs/axios")
  export default {
    name: "AboutMePageSettings",
    async fetch() {
      let Data = await fetch(
        `http://${process.env.HOST}:${process.env.API_PORT}/api/content/about_me`
      ).then((res) => res.json());
      this.data = Data.data[0];
      this.newData = Data.data[0];
      this.p_picture = Data.data[0].picture;
      this.p_programming_skills = Data.data[0].programming_skills;
      this.p_descriptions = Data.data[0].descriptions;
      let icons = await fetch(
        `http://${process.env.HOST}:${process.env.API_PORT}/api/icons`
      ).then((res) => res.json());
      this.icons = icons[0];
    },
    data() {
      return {
        data: {},
        icons: {},
        selectExp: null,
        p_picture: null,
        p_descriptions: null,
        p_programming_skills: null,
        changedList: [],
      }
    },
    methods: {
      detectExp: function (id) {
        document.getElementById(id).style.display = this.selectExp ? "flex" : "none"
        this.selectExp = !this.selectExp
      },
      changHandler: function (inp) {
        if (!this.changedList.includes(inp)) {
          this.changedList.push(inp);
        }
        //console.log("changedList:", this.changedList)
      },
      saveAndPost: function (changed) {
        if (changed.length > 0) {
          changed.map(item => {
            switch (`p_${item}`) {
              case "p_picture":
                let newData1 = this.fun_p_picture(item);
                this.data = newData1;
                break
              case "p_email":
                let newData2 = this.fun_p_email(item);
                this.data = newData2;
                break;
              case "p_descriptions":
                let newData3 = this.fun_p_descriptions(item);
                this.data = newData3;
                break;
              case "p_programming_skills":
                let newData4 = this.fun_p_programming_skills(item);
                this.data = newData4;
                break;
              default:
                console.log("Nothing changed yet!");
            }
          })
          api_methods.postData("content/about_me", this.data);
          this.changedList = [];
          alert("UPDATE SUCCESSFUL")
        }
      },
      fun_p_picture: function (item) {
        let newData = {}
        const newValue = this[`p_${item}`];
        newData[item] = newValue;
        newData = {...this.data, ...newData};
        return newData;
      },
      fun_p_email: function (item) {
        let newData = {};
        const newValue = this[`p_${item}`];
        newData[item] = newValue;
        newData = {...this.data, ...newData}
        return newData;
      },
      fun_p_descriptions: function (item) {
        let newData = {}
        const newValue = this[`p_${item}`];
        newData[item] = newValue;
        newData = {...this.data, ...newData}
        return newData;
      },
      fun_p_programming_skills: function (item) {
        let newData = {}
        const newValue = this[`p_${item}`];
        newData[item] = newValue;
        newData = {...this.data, ...newData}
        return newData;
      }
    }
  }
</script>

<style>
  .aboutMePageSettings .settings-header {
    border-bottom: 1px solid var(--color6);
    margin-bottom: 10px;
  }

  .aboutMePageSettings .settings-body {
    display: flex;
    flex-direction: column;
  }

  .aboutMePageSettings .settings-footer {
    border-top: 1px solid var(--color6);
    margin-top: 10px;
    padding: 10px;
    display: block;
    text-align: right;
  }

  .aboutMePageSettings .profile-picture .my-picture {
    width: 300px;
    height: 300px;
    margin: 15px 15px 0 15px;
    border-radius: 15px;
    overflow: visible;
  }

  .aboutMePageSettings .profile-picture {
    display: flex;
    padding-bottom: 30px;
  }

  .aboutMePageSettings
  .settings-body
  .profile-descriptions
  h5 {
    display: block;
    text-align: center;
    margin-bottom: 30px;
    padding-top: 20px;
    border-top: 1px solid var(--color3);
  }

  .aboutMePageSettings
  .settings-body
  .profile-descriptions
  .descriptions-box
  .description-inp {
    margin: 20px;
  }

  .aboutMePageSettings
  .profile-picture
  .picture-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .aboutMePageSettings .profile-workexp {
    border-top: 1px solid var(--color3);
    width: 100%;
    padding: 30px;
    margin-top: 10px;
  }

  .aboutMePageSettings
  .profile-workexp
  .workexps-box
  ol
  li {
    color: var(--color4);
    background-color: var(--color2);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .aboutMePageSettings
  .profile-workexp
  .workexps-box
  ol
  li
  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .aboutMePageSettings
  .profile-workexp
  .workexps-box
  ol
  li
  div:last-child {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 20px;

  }

  .aboutMePageSettings
  .profile-workexp
  .workexps-box
  .workexps-inps {
    display: none;
  }

  .aboutMePageSettings
  .profile-workexp
  .workexps-box
  .workexps-inps
  label {
    display: flex;
    flex-direction: column;
    color: var(--color4);
    margin: 10px;
  }

  .aboutMePageSettings
  .profile-workexp
  .workexps-box
  .workexps-inps
  label
  .default-inp {
    width: 800px;
  }

  .aboutMePageSettings
  .p-skills
  .p-skills-title {
    display: flex;
    justify-content: space-around;
    width: 640px;
  }

  .aboutMePageSettings
  .p-skills
  .p-skills-box
  input {
    margin: 10px;
  }

  .aboutMePageSettings
  .p-skills {
    border-top: 1px solid var(--color3);
  }
</style>
