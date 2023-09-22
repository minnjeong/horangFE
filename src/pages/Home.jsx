import React from "react";
import Tab from "../components/tab/Tab";
import UserRanking from "../components/ranking/UserRanking";
import SchoolRanking from "../components/ranking/SchoolRanking";
import CampusRanking from "../components/ranking/CampusRanking";

function Home() {
  const tabData = [
    { menu: "사용자 순위", content: <UserRanking /> },
    { menu: "학교 별 순위", content: <SchoolRanking /> },
    { menu: "학교 내 순위", content: <CampusRanking /> },
  ];

  return (
    <div>
      <div>
        안녕하세요, <span>코딩짱호랭이</span>님!
      </div>
      <div>공지사항</div>
      <div>
        <div>출석체크</div>
        <div>일간미션</div>
        <div>주간미션</div>
      </div>
      <div>새로 업데이트 된 문제</div>
      <div className="w-[33.875rem]">
        <h2>순위 차트</h2>
        <Tab tabData={tabData} />
      </div>
    </div>
  );
}

export default Home;
