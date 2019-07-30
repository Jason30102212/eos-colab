import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';

// Don't forgot to tell ScatterJS which plugins you are using.
ScatterJS.plugins(new ScatterEOS());

ScatterJS.scatter.connect("eos-colab").then(connected => {
  // User does not have Scatter Desktop, Mobile or Classic installed.
  if(!connected) return false;

  const scatter = ScatterJS.scatter;

  store.dispatch('setScatter', scatter);

  window.ScatterJS = null;


});
