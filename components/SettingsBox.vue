<template>
  <div class="settings-box">
    <div class="sidebar" v-if="data">
      <div
        :class="`sidebox ${activePanel === s.component ? 'active':''}`"
        v-for="(s, i) in data.all_settings"
        @click="setSettingsBox(s.component)"
      >
        <i :class="icons[s.icon]"/> {{s.title}}
      </div>
    </div>
    <div class="settings-panel">
      <component :is="activePanel"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SettingsBox",
    props: ["data", "icons"],
    methods: {
      setSettingsBox(component) {
        this.activePanel = component;
      }
    },
    data() {
      return {
        activePanel: "MainPageSettings"
      }
    }
  }
</script>

<style>
  .settings-box {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    min-height: 700px;
    transition: ease-in-out;
    transition-duration: 1s;
  }

  .settings-box .sidebar {
    color: var(--color5);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    width: 200px;
    padding: 0;
    margin: 0 10px 0 0;
  }

  .settings-box .sidebar .sidebox {
    padding: 20px 0 20px 10px;
    background-color: var(--color1);
    display: inline-block;
    border-bottom: 1px solid var(--color6);
    cursor: pointer;
  }

  .settings-box .sidebar .sidebox:hover {
    background-color: var(--color5);
    color: var(--color1)!important;
  }

  .settings-box .sidebar .sidebox.active {
    border-left: 5px solid var(--color5);
    color: var(--color4);
  }

  .settings-box .settings-panel {
    background-color: var(--color1);
    /* border: 1px solid var(--color6);*/
    color: var(--color4);
    width: 100%;
    min-height: 600px;
    padding: 30px;

  }
</style>
