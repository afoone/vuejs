<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 v-bind:class="myclasses" class="pepe juan" :style="[h1styles, h1styles2]">Hola Mundo</h1>

    <div v-bind:class="h1classes">{{number}}</div>
    <button v-on:click="cambiaColor">Cambia Color</button>
    <div>
      <input type="number" v-model.number="number" />
    </div>
    <div style="display: flex">
      <div
        class="colored"
        v-for="item in 12"
        :key="item"
        :style="{backgroundColor: getColor(item)}"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      number: 5,
      h1classes: []
    };
  },
  computed: {
    numberclasses() {
      return [
        "number",
        {
          impar: this.number % 2 === 1
        }
      ];
    },
    h1styles() {
      return {
        border: "1px solid blue",
        fontFamily: "Courier",
        fontSize: "4em"
      };
    },
    h1styles2() {
      return {
        borderRadius: "1rem"
      };
    }
  },
  props: {
    msg: String,
    myclasses: Array
  },
  created() {
    if (this.number % 2 === 1) {
      this.numberclasses.push("impar");
    }
    this.h1classes = this.myclasses;
  },
  methods: {
    getColor(n) {
      console.log(n);
      return `hsl(${n * 5}, 100%, 50%)`;
    },
    cambiaColor() {
      if (this.h1classes.includes("red")) {
        this.h1classes = [...this.h1classes.filter(i => i != "red"), "blue"];
      } else {
        this.h1classes = [...this.h1classes.filter(i => i != "blue"), "red"];
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.number {
  font-size: 2em;
  font-weight: bold;
}
.impar {
  color: blue;
}

.blue {
  color: blue;
}
.header {
  font-size: 2rem;
  font-style: italic;
}

.red {
  color: red;
}

.colored {
  width: 100px;
  height: 100px;
  background-color: gray;
}
img {
  border: 4px solid orange;
}
</style>
