function convertBtuToHp() {
    const btu = parseFloat(document.getElementById("btuInput").value);
    const btuPerHp = 9000;
    if (!isNaN(btu)) {
        const hp = (btu / btuPerHp).toFixed(2);
        document.getElementById("result").innerText = `${btu} BTU is approximately ${hp} HP.`;
    } else {
        document.getElementById("result").innerText = "Please enter a valid number.";
    }
}
