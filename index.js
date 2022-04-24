let daftar_Game = prompt(`Silahkan pilih daftar Game yang anda butuhkan:
	1. Power Rangers
	2. GTA
	3. PES 2022
	4. Oncepish
	5. Bus Simulator`);

switch (daftar_Game) {
	case "1":
		alert("Power Rangers telah dipilih");
		break;
	case "2":
		alert("GTA telah dipilih");
		break;
	case "3":
		alert("PES 2022");
		break;
	case "4":
		alert("Oncepish");
		break;
	case "5":
		alert("Bus Simulator");
		break;
	default:
		alert("Maaf Game yang anda pilih tidak tersedia");
		break;
}