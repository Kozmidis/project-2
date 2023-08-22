"use client";
import React, { useState, useEffect } from "react";
import Candidates from "@/components/Candidates/Candidates";
import { FilterFilled } from "@ant-design/icons";
import { Button } from "antd";

export default function CandidatesPage() {
  const [apiState, setApiState] = useState([]);
  useEffect(() => {
    async function api() {
      await fetch(`https://fakerapi.it/api/v1/persons?_locale=fr_FR`).then(
        async (res) => {
          const data = await res.json();
          console.log(data.data);
          setApiState(data.data);
        }
      );
    }
    api();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <div>
          <h2
            style={{
              fontSize: 21,
            }}
          >
            Candidates
          </h2>
          <p
            style={{
              color: "#aaaaaa",
              letterSpacing: "0.5px",
              marginTop: 8,
              fontSize: 17,
            }}
          >
            Total Candidates
          </p>
        </div>
        <Button
          style={{ color: "#aaaaaa" }}
          icon={<FilterFilled style={{ color: "#aaaaaa" }} />}
        >
          Filter
        </Button>
      </div>

      <Candidates data={apiState} />
    </>
  );
}
