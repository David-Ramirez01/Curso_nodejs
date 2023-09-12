const fs = require("fs");

const Creattable = async (Base) => {
  try {
    console.log(" ============== ");
    console.log(`  Tabla del ${Base}`);
    console.log(" ============== ");

    let sal = "";
    for (let ini = 1; ini <= 10; ini++) {
      sal += `${Base} x ${ini} = ${Base * ini}\n`;
    }

    console.log(sal);

    fs.writeFileSync(`tabla-del-${Base},txt`, sal);

    return(` Tabla del ${Base}`);
  } catch (err) {
    return err;
  }
};

module.exports = {
  Creattable,
};
