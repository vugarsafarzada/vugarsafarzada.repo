<template>
  <div class="content">
    <div class="titles p-4">
      <h1 class="beat-title"><i :class="icons.albom" /> Andromeda</h1>
      <h5 class="beat-title">Creator: "Vüqar Səfərzadə"</h5>
    </div>
    <div class="beats-list">
      <dl v-for="b in beats" :key="b.title" class="beat shadow">
        <span>
          <i :class="icons.music_note" />
        </span>
        <h3>"{{ b.title }}"</h3>
        <h5>
          Vugar Beats
          <br />
          <span class="fs-6 text-secondary">( {{ b.date }} )</span>
        </h5>
        <dt>
          <h6><i :class="icons.disc" /> Parça: #{{ b.beat_key }}</h6>
        </dt>
        <dt>
          <h6>
            <i :class="icons.albom" />
            Albom: {{ b.albom_id.split("_")[1].toUpperCase() }}
          </h6>
        </dt>
        <dt>
          <h6>
            <i :class="icons.youtube" />
            <a :href="b.path" target="_blank" class="text-decoration-none"
              >On YouTube</a
            >
          </h6>
        </dt>
        <hr />
        <dd>
          <audio class="audio-player" controls>
            <source :src="beatURL(b._id)" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: "Beatplayer",
  props: ["beats", "icons"],
  methods: {
    beatURL: function (id) {
      return `${id}.mp3`;
    },
  },
};
</script>

<style>
.content {
  width: 1400px;
  padding: 30px;
}

.content .beats-list {
  border-top: 1.5px dashed var(--color5);
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.content .beats-list dl span > i {
  font-size: 100px;
  float: right;
  position: relative;
  bottom: 15px;
  right: 15px;
}

.content .beats-list .beat {
  width: 400px;
  overflow: hidden;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  color: var(--color4);
  background-color: var(--color1);
}

.content .beats-list .beat h6 {
  font-size: 14px;
}

.content .titles .beat-title {
  color: var(--color6);
}
.audio-player {
  width: 350px;
  padding: 0;
}
</style>
