<template>
  <div class="main-content">
    <h2 class="main-title"><i :class="icons.info" /> Self introduction</h2>
    <div class="main-content-box">
      <img
        class="my-picture"
        :src="require(`../static/images/${data.picture}`)"
        alt="picture"
      />
      <div class="about-me">
        <div class="intro shadow">
          <h6 class="">Name: Vugar Safarzada</h6>
          <h6 class="">Birthday: September 6, 2001</h6>
          <h6 class="">Specialty: Software, Information Technology</h6>
          <hr />
          <h6 class="">
            <i :class="icons.telephone" />
            Tel:
            <a class="text-decoration-none" :href="`tel:${data.phone[1]}`">{{
              data.phone[1]
            }}</a>
          </h6>
          <h6 class="">
            <i :class="icons.whatsapp" /> Whatsapp:
            <a
              class="text-decoration-none"
              target="_blank"
              :href="`https://wa.me/${data.phone[0].split(' ').join('')}`"
              >+{{ data.phone[0] }}</a
            >
          </h6>
          <h6 class="">
            <i :class="icons.email" /> E-mail:
            <a class="text-decoration-none" :href="`mailto:${data.email}`">{{
              data.email
            }}</a>
          </h6>
          <h6 class="">
            <i :class="icons.github" />
            GitHub:
            <a
              class="text-decoration-none"
              target="_blank"
              :href="data.social.github"
            >
              {{ data.social.github.split("/")[3] }}
            </a>
          </h6>
          <h6 class="">
            <i :class="icons.linkedin" />
            Linkedin:
            <a
              class="text-decoration-none"
              target="_blank"
              :href="data.social.linkedin"
            >
              Vüqar Səfərzadə
            </a>
          </h6>
        </div>
      </div>
    </div>
    <div class="descriptions">
      <hr />
      <span class="fw-bold"><i :class="icons.angle" /> Who is Vugar?</span>
      <p class="description">{{ data.description }}</p>
      <hr />
      <span class="fw-bold"><i :class="icons.angle" /> Software history:</span>
      <p class="description">{{ data.description1 }}</p>
      <hr />
      <span class="fw-bold"><i :class="icons.angle" /> Business Life:</span>
      <p class="description">{{ data.description2 }}</p>
      <div class="programming-skills"></div>
    </div>
    <h2 class="main-title"><i :class="icons.book" /> Eduction</h2>
    <div class="main-content-box container" v-if="data.eduction_skills">
      <div class="row w-100 p-3">
        <dl class="col e-skills shadow">
          <dt>
            <h4><i :class="icons.school" /> School:</h4>
          </dt>
          <hr />
          <dd>
            {{ data.eduction_skills.school.name }} (
            {{ data.eduction_skills.school.date }} )
          </dd>
          <dd>
            <i :class="icons.location" />
            {{ data.eduction_skills.school.location }}
          </dd>
        </dl>
        <dl class="col e-skills shadow">
          <dt>
            <h4><i :class="icons.graduation" /> University:</h4>
          </dt>
          <hr />
          <dd>
            {{ data.eduction_skills.university.name }} (
            {{ data.eduction_skills.university.date }} )
          </dd>
          <dd>
            <i :class="icons.user_graduate" />
            {{ data.eduction_skills.university.specialty }} (
            {{ data.eduction_skills.university.degree }} )
          </dd>
          <dd></dd>
          <dd>
            <i :class="icons.location" />
            {{ data.eduction_skills.university.location }}
          </dd>
        </dl>
      </div>
    </div>
    <h2 class="main-title"><i :class="icons.briefcase" /> Work Experience</h2>
    <div class="main-content-box container" v-if="data.experience">
      <div class="w-100 p-3 row">
        <dl v-for="d in data.experience" :key="d.title" class="w-skills shadow">
          <h4>{{ d.title }}</h4>
          <dt>
            <h6>
              <i :class="icons.company" /> At the "{{ d.company_name }}" (
              {{ d.date.toUpperCase() }} )
            </h6>
          </dt>
          <dt>
            <h6>
              <i :class="icons.web" /> Company website:
              <a class="" :href="d.company_url" target="_blank">
                {{ d.company_url }}</a
              >
            </h6>
          </dt>
          <dt>
            <h6><i :class="icons.location" /> {{ d.location }}</h6>
          </dt>
          <hr />
          <dd>
            Projects:
            <ul v-for="p in d.project" :key="p.name">
              <li>{{ p.name }} ( {{ p.date }} )</li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
    <h2 class="main-title">
      <i :class="showIcon" class="p-skill-icon" /> Programming Skills
    </h2>
    <div class="main-content-box container">
      <ul class="p-skills p-3 row">
        <li
          class="skill col"
          v-if="data.programming_skills"
          v-for="d in data.programming_skills"
          :key="d.skill"
        >
          <span>
            {{ d.skill }}
            <i :class="setLevel(d.level).emojis" />
          </span>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              :style="setLevel(d.level).styles"
              :aria-valuenow="d.level"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {{ d.level }}%
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    let icons = await fetch(
      `http://${process.env.HOST}:${process.env.API_PORT}/api/icons`
    ).then((res) => res.json());
    this.icons2 = icons[0];
  },
  name: "Main",
  props: ["data", "icons"],
  methods: {
    setLevel: function (p) {
      var emojis;
      if (p <= 10) {
        emojis = this.icons.emoji.angry;
      }
      if (p > 10 && p <= 30) {
        emojis = this.icons.emoji.frown;
      }
      if (p <= 50 && p > 30) {
        emojis = this.icons.emoji.neutral;
      }
      if (p <= 70 && p > 50) {
        emojis = this.icons.emoji.smile;
      }
      if (p <= 90 && p > 70) {
        emojis = this.icons.emoji.laughing;
      }
      if (p <= 100 && p > 90) {
        emojis = this.icons.emoji.sunglasses;
      }
      return { styles: `width: ${p}%`, emojis };
    },
  },

  data() {
    return {
      showIcon: this.icons.code,
      icons2: {},
    };
  },

  mounted() {
    let i = 0;
    setInterval(() => {
      let allicons = [
        this.icons.programming.html,
        this.icons.programming.java,
        this.icons.programming.css,
        this.icons.programming.react,
        this.icons.programming.vue,
        this.icons.programming.git,
        this.icons.programming.python,
        this.icons.programming.js,
        this.icons.programming.bootstrap,
      ];
      if (i < allicons.length) {
        this.showIcon = allicons[i];
        i++;
      }
      if (i === allicons.length) {
        i = 0;
      }
    }, 1000);
  },
};
</script>

<style>
.main-content {
  width: 1000px;
  padding: 30px;
  margin: 20px;
  border-radius: 20px;
  color: var(--color4);
  background-color: var(--color2);
}

.main-content .my-picture {
  width: 300px;
  height: 300px;
  margin: 15px 15px 0 15px;
  border-radius: 15px;
  overflow: visible;
}

.main-content .main-title {
  display: inline-block;
  padding: 10px;
}

.main-content .main-content-box {
  padding: 10px 0 10px 0;
  border-top: 1.5px dashed var(--color5);
  display: flex;
}

.main-content .main-content-box .about-me {
  padding: 15px;
}

.main-content .main-content-box .e-skills {
  padding: 20px;
  border-left: 3px dashed var(--color5);
  background-color: var(--color1);
  margin: 10px;
}

.about-me .intro {
  width: 500px;
  padding: 20px;
  margin: 10px 0 0 40px;
  border-left: 3px dashed var(--color5);
  background-color: var(--color1);
}

.main-content .main-content-box .w-skills {
  padding: 20px;
  border-left: 3px dashed var(--color5);
  background-color: var(--color1);
  margin: 10px;
}

.w-skills h4 {
  color: var(--color5);
}

.e-skills dd {
  font-style: italic;
}

.p-skills .progress {
  width: 200px;
  height: 20px;
  background-color: var(--color7);
}

.p-skills .progress-bar {
  width: 200px;
  height: 20px;
  background-color: var(--color5);
  opacity: 100%;
  color: var(--color3);
  font-weight: bold;
}

.p-skills .skill {
  margin-bottom: 20px;
  list-style: none;
  color: var(--color4);
}

.main-title .p-skill-icon {
  color: var(--color6);
}

.p-skills .skill span {
  text-align: center;
  color: var(--color4);
}

.descriptions span {
  color: var(--color5);
}

.main-title i {
  width: 30px;
  font-size: 30px;
}

.main-title {
  color: var(--color4);
}
</style>
