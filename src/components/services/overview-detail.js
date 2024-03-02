import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../scss/services/overview.scss";
import image from "../../images/carouselImages/home/A1.webp";
import Header from "../page-title/header";

const OverviewDetail = ({ items }) => {
  const { url } = useParams();
  const service = items.find((item) => item.url === url);

  return (
    <div className="overview-detail">
      <div className="container-xl">
        <div className="row">{service.title}</div>
      </div>
    </div>
  );
};

export default OverviewDetail;
