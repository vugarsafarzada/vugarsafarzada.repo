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
<!--            <input
              type="text"
              class="default-inp"
              @change="() => changHandler('picture')"
              v-model="p_picture"
            />-->
            <MediaUploader to="/contents=url:about_me=picture"/>
          </label>
        </div>
      </div>
      <div class="profile-descriptions" v-if="data.descriptions">
        <h5 class="">Descriptions ({{data.descriptions.length}})</h5>
        <div class="descriptions-box">
          <div
            class="description-inp"
            v-for="(desc, index) in data.descriptions"
            :key="index"
          >
            <label>
              <input
                @change="() => changHandler('descriptions')"
                type="text"
                class="default-inp m-0 text-light p-2"
                v-model="p_descriptions[index].title"
              />
              <textarea
                @change="() => changHandler('descriptions')"
                name="desc"
                id=""
                cols="130"
                rows="10"
                v-model="p_descriptions[index].desc"
                class="default-textarea"
              />
            </label>
          </div>
        </div>
      </div>
      <div class="profile-workexp" v-if="data.experience">
        <h5 class="text-center mb-5">Work Experiences ({{data.experience.length}})</h5>
        <div class="workexps-box">
          <ol v-if="data">
            <li v-for="(exp, index) in data.experience" :key="index">
              <div @click="detectExp(exp.company_name)">
                <span>"{{ exp.title }}" at {{ exp.company_name }}</span>
              </div>
              <div :id="exp.company_name" class="workexps-inps">
                <label for="inp-title">
                  Title:
                  <input
                    class="default-inp"
                    v-model="p_experience[index].title"
                    @change="() => changHandler('experience')"
                    type="text"
                    id="inp-title"
                  />
                </label>
                <label for="inp-date">
                  Experience:
                  <input
                    class="default-inp"
                    v-model="p_experience[index].date"
                    @change="() => changHandler('experience')"
                    type="text"
                    id="inp-date"
                  />
                </label>
                <label for="inp-company-name">
                  Company Name:
                  <input
                    class="default-inp"
                    v-model="p_experience[index].company_name"
                    @change="() => changHandler('experience')"
                    type="text"
                    id="inp-company-name"
                  />
                </label>
                <label for="inp-company-website">
                  Company Web-Site:
                  <input
                    class="default-inp"
                    v-model="p_experience[index].company_url"
                    @change="() => changHandler('experience')"
                    type="text"
                    id="inp-company-website"
                  />
                </label>
                <label for="inp-location">
                  Location:
                  <input
                    class="default-inp"
                    v-model="p_experience[index].location"
                    @change="() => changHandler('experience')"
                    type="text"
                    id="inp-location"
                  />
                </label>
                <label for="inp-projects" class="inp-projects">
                  Projects:
                  <input
                    class="default-inp"
                    v-model="p_experience[index].project[0].name"
                    @change="() => changHandler('experience')"
                    type="text"
                    id="inp-projects"
                  />
                  <input
                    class="default-inp"
                    v-model="p_experience[index].project[0].date"
                    @change="() => changHandler('experience')"
                    type="text"
                    id="inp-projects-data"
                  />
                </label>
                <div class="workexps-buttons-box">
                  <button class="btn btn-outline-danger" type="reset" @click="fun_delete_w_e(index)">
                    Delete <i v-if="icons" :class="icons['trash']"/>
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div @click="detectExp('add_new_work_experience')">
                <span class="text-success">Add New Work Experience</span>
                <!--
                <i v-if="selectExp" :class="icons['double-down']"/>
                <i v-else :class="icons['double-up']" />
                -->
              </div>
              <div id="add_new_work_experience" class="workexps-inps">
                <label for="inp-title">
                  Title:
                  <input
                    class="default-inp"
                    type="text"
                    id="p-inp-title"
                    v-model="p_add_work_experience.title"
                  />
                </label>
                <label for="inp-date">
                  Experience:
                  <input
                    class="default-inp"
                    type="text"
                    id="p-inp-date"
                    v-model="p_add_work_experience.date"
                  />
                </label>
                <label for="inp-company-name">
                  Company Name:
                  <input
                    class="default-inp"
                    type="text"
                    id="p-inp-company-name"
                    v-model="p_add_work_experience.company_name"
                  />
                </label>
                <label for="inp-company-website">
                  Company Web-Site:
                  <input
                    class="default-inp"
                    type="text"
                    id="p-inp-company-website"
                    v-model="p_add_work_experience.company_url"
                  />
                </label>
                <label for="inp-location">
                  Location:
                  <input
                    class="default-inp"
                    type="text"
                    id="p-inp-location"
                    v-model="p_add_work_experience.location"
                  />
                </label>
                <label v-for="project in p_add_work_experience.project" for="inp-projects" class="inp-projects">
                  Projects:
                  <input
                    class="default-inp"
                    type="text"
                    id="p-inp-projects"
                    v-model="project.name"
                    placeholder="Project name"
                  />
                  <input
                    class="default-inp"
                    type="text"
                    id="p-inp-projects-data"
                    v-model="project.date"
                    placeholder="Project date"
                  />
                </label>
                <div class="workexps-buttons-box">
                  <button class="btn btn-outline-success" @click="fun_add_w_e()">
                    Add <i v-if="icons" :class="icons['plus-circle']"/>
                  </button>
                  <button class="btn btn-outline-danger" type="reset" @click="fun_reset_w_e()">
                    Reset <i v-if="icons" :class="icons['x-circle']"/>
                  </button>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="p-skills" v-if="data.programming_skills">
        <br/>
        <h5 class="text-center">Programming Skills ({{data.programming_skills.length}})</h5>
        <br/>
        <ol v-if="data" class="p-skills-group">
          <li class="p-skills-title">
            <span>Skill name:</span><span>Level:</span>
          </li>
          <li
            v-for="(s, index) in data.programming_skills"
            :key="index"
            class="p-skills-box"
          >
            <input
              type="text"
              class="default-inp"
              @change="() => changHandler('programming_skills')"
              v-model="p_programming_skills[index].skill"
            />
            <input
              type="number"
              maxlength="100"
              class="default-inp text-center w-25"
              @change="() => changHandler('programming_skills')"
              v-model="p_programming_skills[index].level"
            />
            <button class="p-0 btn text-danger" @click="fun_delete_programming_skill(index)">
              <i
                title="Delete skill"
                v-if="icons"
                :class="icons['x-circle']"
              />
            </button>
          </li>
          <li>
            <input
              type="text"
              class="default-inp"
              v-model="p_add_programming_skills.skill"
            />
            <input
              type="number"
              maxlength="100"
              class="default-inp text-center w-25"
              v-model="p_add_programming_skills.level"
            />
            <button class="btn text-success p-0" @click="fun_add_programming_skill()">
              <i v-if="icons" :class="icons['plus-circle']" title="Add new skill"/>
            </button>
          </li>
        </ol>
      </div>
    </div>
    <div class="settings-footer">
      <button class="btn default-btn" @click="saveAndPost(changedList)">
        Save
      </button>
      <button class="btn default-btn-2" @click="()=> fun_cancel_progress()">
        Cancel
      </button>
    </div>
  </div>
</template>
<script>
  const api_methods = require("../api/methods");
  const axios = require("@nuxtjs/axios");
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
      this.p_experience = Data.data[0].experience;

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
        p_experience: null,
        p_add_programming_skills: {
          skill: null,
          level: null,
        },
        p_add_work_experience: {
          title: null,
          company_name: null,
          company_url: null,
          date: null,
          location: null,
          project: [
            {
              name: null,
              date: null,
              description: null
            },
          ],
        },
        changedList: [],
      };
    },
    methods: {
      detectExp: function (id) {
        document.getElementById(id).style.display = this.selectExp
          ? "flex"
          : "none";
        this.selectExp = !this.selectExp;
      },
      changHandler: function (inp) {
        if (!this.changedList.includes(inp)) {
          this.changedList.push(inp);
        }
        //console.log("changedList:", this.changedList)
      },
      saveAndPost: function (changed) {
        if (changed.length > 0) {
          changed.map((item) => {
            switch (item) {
              case "picture":
                let newData1 = this.fun_p_add_data(item);
                this.data = newData1;
                break;
              case "email":
                let newData2 = this.fun_p_add_data(item);
                this.data = newData2;
                break;
              case "descriptions":
                let newData3 = this.fun_p_add_data(item);
                this.data = newData3;
                break;
              case "programming_skills":
                let newData4 = this.fun_p_add_data(item);
                this.data = newData4;
                break;
              case "experience":
                let newData5 = this.fun_p_add_data(item);
                this.data = newData5;
                break;
              case "new_data":
                console.log();
                break;
              case "deleted_data":
                console.log();
                break;
              default:
                alert("Nothing changed yet!");
            }
          });
          api_methods.postData("content/about_me", this.data);
          this.changedList = [];
          alert("UPDATE SUCCESSFUL");
        }
      },

      fun_p_add_data: function (item) {
        let newData = {};
        const newValue = this[`p_${item}`];
        newData[item] = newValue;
        newData = {...this.data, ...newData};
        return newData;
      },

      fun_add_programming_skill: function () {
        if (this.p_add_programming_skills.skill !== null && this.p_add_programming_skills.level !== null) {
          this.data.programming_skills.push(this.p_add_programming_skills);
          this.changHandler("new_data");
          this.p_add_programming_skills = {
            skill: null,
            level: null,
          }
        } else {
          alert("Enter skill and level!".toUpperCase());
        }
      },

      fun_delete_programming_skill: function (index) {
        if (index < this.data.programming_skills.length) {
          this.data.programming_skills.splice(index, 1);
          this.changHandler("deleted_data");
        }
      },

      fun_add_w_e: function () {
        if (
          this.p_add_work_experience.title !== null &&
          this.p_add_work_experience.date !== null &&
          this.p_add_work_experience.company_name !== null &&
          this.p_add_work_experience.company_url !== null &&
          this.p_add_work_experience.location !== null &&
          this.p_add_work_experience.project[0].name !== null
        ) {
          this.data.experience.push(this.p_add_work_experience);
          this.changHandler("new_data");
          this.fun_reset_w_e();
        } else {
          alert("Enter all requirements!".toUpperCase());
        }
      },
      fun_delete_w_e: function(index){
        if (index < this.data.experience.length) {
          this.data.experience.splice(index, 1);
          this.changHandler("deleted_data");
        }
      },
      fun_reset_w_e: function () {
        this.p_add_work_experience = {
          title: null,
          company_name: null,
          company_url: null,
          date: null,
          location: null,
          project: [
            {
              name: null,
              date: null,
              description: null
            },
          ],
        }
      },

      fun_cancel_progress: async function () {
        if(this.changedList.length > 0){
          this.changedList = [];
          window.location.reload(false);
        }
      }
    },

  };
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

  .aboutMePageSettings .settings-body .profile-descriptions h5 {
    display: block;
    text-align: center;
    margin-bottom: 30px;
    padding-top: 20px;
    border-top: 1px solid var(--color3);
  }

  .aboutMePageSettings
  .settings-body
  .profile-descriptions
  .default-textarea {
    background-color: var(--color2);
    color: var(--color5);
    padding: 10px;
  }

  .aboutMePageSettings
  .settings-body
  .profile-descriptions
  .descriptions-box
  .description-inp {
    margin: 20px;
  }

  .aboutMePageSettings .profile-picture .picture-box {
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

  .aboutMePageSettings .profile-workexp .workexps-box ol li {
    color: var(--color4);
    background-color: var(--color2);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .aboutMePageSettings .profile-workexp .workexps-box ol li div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .aboutMePageSettings .profile-workexp .workexps-box ol li div:last-child {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 20px;
  }

  .aboutMePageSettings .profile-workexp .workexps-box ol li:last-child {
    list-style: none;
  }

  .aboutMePageSettings .profile-workexp .workexps-box .workexps-inps {
    display: none;
  }

  .aboutMePageSettings .profile-workexp .workexps-box .workexps-inps label {
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
  .profile-workexp
  .workexps-box
  .workexps-inps
  .inp-projects
  .default-inp {
    width: 300px;
  }

  .aboutMePageSettings .profile-workexp .inp-projects {
    display: flex;
    width: 800px;
    flex-direction: row !important;
    padding: 10px;
  }

  .aboutMePageSettings
  .profile-workexp
  .workexps-buttons-box
  {
    padding-top: 30px;
    width: 800px;
    text-align: right;
  }

  .aboutMePageSettings .p-skills .p-skills-title {
    display: flex;
    justify-content: space-around;
    width: 460px;
  }

  .aboutMePageSettings .p-skills .p-skills-group li:last-child {
    list-style: none;
  }

  .aboutMePageSettings .p-skills .p-skills-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .aboutMePageSettings .p-skills .p-skills-box input {
    margin: 10px;
  }

  .aboutMePageSettings .p-skills {
    border-top: 1px solid var(--color3);
  }
</style>
