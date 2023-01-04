const getRandomIntInclusive = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  for (let i = 0; i < 10; i += 1) {
    console.log(`Random number ${i}: ${getRandomIntInclusive(1, 10)}`);
  }
  