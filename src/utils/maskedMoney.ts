const maskedMoney = (value: string | number) => {
  // sin commit, remove immediately
  // return must be string, as per expected by reactText
  // return "-" by default. if value exist return "masked value" when possible, else return value.toString().

  let result = "0";

  if (value) {
    const nominal = value.toString();
    const split = nominal.split(",");
    const sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    const ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      const separator = sisa ? "," : "";
      rupiah += separator + ribuan.join(",");
    }

    rupiah = split[1] !== undefined ? `${rupiah},${split[1]}` : rupiah;

    result = rupiah || nominal;
  }

  return `Rp ${result}`;
};

export default maskedMoney;
