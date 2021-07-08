<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <p v-text="'some text'"></p>
        <div v-html="'<strong>Some text in bold</strong>'"></div>
      </div>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight:background="'red'">
          Change background colour (by setting explicit background directive
          arg)
        </p>
        <p v-highlight:background.delayed="'red'">
          Delay changing background colour (using modifiers)
        </p>
        <p v-highlight="'red'">Change text colour (default)</p>
        <p v-local-highlight:background.delayed.blink="{mainColour: 'red', secondColour: 'rebeccapurple', interval: 500}">
          Local directive
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColour = binding.value.mainColour;
          let secondColour = binding.value.secondColour;
          let currentColour = mainColour;
          setTimeout(() => {
            setInterval(() => {
              currentColour === mainColour ? currentColour = secondColour : currentColour = mainColour;
              if (binding.arg === "background") {
                el.style.backgroundColor = currentColour;
              } else {
                el.style.color = currentColour;
              }
            }, binding.value.interval);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg === "background") {
              el.style.backgroundColor = binding.value.mainColour;
            } else {
              el.style.color = binding.value.mainColour;
            }
          }, delay);
        }
      },
    },
  },
};
</script>

<style></style>
