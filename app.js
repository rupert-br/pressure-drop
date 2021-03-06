var app = new Vue({
  el:"#setup",
  data: {
    flow_rate: '',
    flow_rate_unit: '',
    density_fluid: '',
    density_fluid_unit: '',
    density_atm: '',
    density_atm_unit: '',
    height_difference: '',
    height_difference_unit: '',
    viscosity_fluid: '',
    viscosity_fluid_unit: '',
    pipes: [
      {
        type: 'pipe',
        pipe_length: '',
        pipe_length_unit: 'Einheit',
        diameter: '',
        diameter_unit: 'Einheit',
        roughness: '',
        roughness_unit: 'Einheit',
      }
    ],
    fittings: [
     {
       type: 'fitting',
       name: '',
       zeta: ''
     } 
    ]
  },
  methods: {
    addNewPipeForm () {
      this.pipes.push({
        type: 'pipe',
        pipe_length: '',
        pipe_length_unit: 'Einheit',
        diameter: '',
        diameter_unit: 'Einheit',
        roughness: '',
        roughness_unit: 'Einheit'
      })
    },
    deletePipeForm (index) {
      this.pipes.splice(index, 1)
    },
    addNewFittingForm () {
      this.fittings.push({
        type: 'fitting',
        name: '',
        zeta: ''
      })
    },
    deleteFittingForm (index) {
      this.fittings.splice(index, 1)
    },
    printPipes () {
      this.pipes.forEach( function (value) {
        console.log(lengthConverter(value.length, value.length_unit))
      });
    },
    calculateVelocity (pipe) {
      let flow_rate = this.flow_rate;
      let flow_rate_unit = this.flow_rate_unit;

      flow_rate = flowRateConverter(flow_rate, flow_rate_unit);
      let diameter = lengthConverter(pipe.diameter, pipe.diameter_unit);
      let area = Math.pow(diameter, 2) * Math.PI / 4
      let velocity = flow_rate / area

      return velocity;
    },
    calculateReynolds (pipe) {
      let viscosity_fluid = this.viscosity_fluid;
      let density_fluid = this.density_fluid
      let velocity = this.calculateVelocity(pipe);
      let diameter = lengthConverter(pipe.diameter, pipe.diameter_unit);

      let reynolds = velocity * density_fluid * diameter / viscosity_fluid;

      return reynolds;
    },
    calculateLambda (pipe) {
      let reynolds = this.calculateReynolds (pipe);
      let lambda;
      let roughness = pipe.roughness;

      
      if (reynolds <= 2320) {
        lambda = 64 / reynolds;
        return lambda;
      }
      if (reynolds > 2320) {
        return lambda;
      }
    }
  }
})

/* When the input field receives input, convert the value */
function lengthConverter(valNum, unit) {
  if (unit == 'mm') {
    valNum = valNum / 1000;
  };
  if (unit == 'm') {
    valNum = valNum;
  };
  if (unit == 'cm') {
    valNum = valNum / 100;
  };
  if (unit == 'inch') {
    valNum = valNum / 39.37;
  }
  return valNum;
}

/* When the input field receives input, convert the value */
function flowRateConverter(valNum, unit) {
  if (unit == 'm3/s') {
    valNum = valNum;
  };
  if (unit == 'm3/h') {
    valNum = valNum / 60 / 60;
  };
  if (unit == 'L/min') {
    valNum = valNum * (1/1000) / 60;
  };
  if (unit == 'L/s') {
    valNum = valNum * (1/1000);
  }
  return valNum;
}

/* Iterate for lambda calculation */
