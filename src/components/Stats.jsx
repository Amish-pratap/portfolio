import React from "react";
import { stats } from "../data";
import parse from "html-react-parser";

const Stats = () => {
  return (
    <>
      {stats.map(({ id, no, title }, index) => {
        return (
          <div className="stats__box" key={index}>
            {id === 3 ? (
              <a
                href="https://auth.geeksforgeeks.org/user/amishpratallop"
                target="_blank"
              >
                <h3 className="stats__no">{no}</h3>
                <p className="stats__title">{parse(title)}</p>
              </a>
            ) : id === 4 ? (
              <a
                href="https://leetcode.com/amishpratapsingh13/"
                target="_blank"
              >
                <h3 className="stats__no">{no}</h3>
                <p className="stats__title">{parse(title)}</p>
              </a>
            ) : (
              <>
                <h3 className="stats__no">{no}</h3>
                <p className="stats__title">{parse(title)}</p>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Stats;
