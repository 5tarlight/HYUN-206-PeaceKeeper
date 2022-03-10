const subs = [];
const links = [];

const dict = {
  문학: "http://abit.ly/문학_박정숙",
  영어: "http://abit.ly/영어_안소미\n(비번: 22003534)",
  수학: "http://abit.ly/수학_신은정",
  체육: "http://abit.ly/체육_김정구",
  진로: "http://abit.ly/진로_김수진",
  기하: "http://abit.ly/기하_김건민",
  연구: "http://abit.ly/데이터_오승희\nhttp://abit.ly/과학과제연구_김지연",
  외국어: "http://abit.ly/외국어_이유진\nhttp://abit.ly/중국어_김지회",
  A: "http://abit.ly/물리_박영지\nhttp://abit.ly/화학_황성희\nhttp://abit.ly/생명_김소민\nhttp://abit.ly/지구_박유선",
  B: "http://abit.ly/물리_박영지\nhttp://abit.ly/화학_방애리\nhttp://abit.ly/생명_안현주",
  C: "http://abit.ly/화학_황성희\nhttp://abit.ly/생명_김소민\nhttp://abit.ly/지구_박유선",
};

const time = [
  "1교시(8:10-9:00)",
  "2교시(9:10-10:00)",
  "3교시(10:10-11:00)",
  "4교시(12:00-12:50)",
  "5교시(13:00-13:50)",
  "6교시(14:00-14:50)",
  "7교시(15:00-15:50)",
];

function start() {
  document.getElementById("s").innerText = Object.keys(dict).join(", ");

  for (let i = 0; i < 7; i++) {
    subs.push(document.getElementById(`sub-${i + 1}`));
    links.push(document.getElementById(`link-${i + 1}`));
  }

  document.getElementById("submit").addEventListener("click", () => {
    const output = document.getElementById("output");
    let result = "";
    result += "조회\n";
    result += dict["기하"];

    time.forEach((t, i) => {
      if (subs[i].value.trim() !== "" && dict[subs[i].value.trim()]) {
        const sub = subs[i].value.trim();
        result += `\n\n${t} - ${sub}\n${dict[sub]}`;
      }
    });

    console.log(result);

    output.innerText = result;
  });
}

window.addEventListener("load", start);
