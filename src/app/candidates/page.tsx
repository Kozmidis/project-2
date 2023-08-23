"use client";
import React from "react";
import { connect } from "react-redux";
import Candidates from "@/components/Candidates/Candidates";
import store from "@/Redux/store/store";

function CandidatesPage() {
  return (
    <div style={{ paddingBottom: 177 }}>
      <Candidates store={store} />
    </div>
  );
}
export default CandidatesPage;
