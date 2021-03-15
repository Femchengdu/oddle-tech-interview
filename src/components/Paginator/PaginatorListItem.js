import React from "react";
import { Link } from "react-router-dom";
import { updateUser } from "../../redux/actions/userActions";
import { connect } from "react-redux";

import "./item-avatar.scss";

const PaginatorListItem = ({ use, item, updateUser }) => {
  let returnItem;

  if (use === "repos") {
    returnItem = <li className="list-group-item">Repo name : {item.name}</li>;
  } else if (use === "followers") {
    returnItem = (
      <li className="list-group-item">
        <Link
          onClick={() => {
            console.log("I am going to make a new request here :", item.login);
            updateUser(item.login);
          }}
          to={`/user/${item.login}`}
        >
          <img src={item.avatar_url} className="item-avatar" alt="..." />
          {item.login}
        </Link>
      </li>
    );
  } else if (use === "following") {
    returnItem = (
      <li className="list-group-item">
        <Link
          onClick={() => {
            console.log("I am going to make a new request here :", item.login);
            updateUser(item.login);
          }}
          to={`/user/${item.login}`}
        >
          <img src={item.avatar_url} className="item-avatar" alt="..." />
          {item.login}
        </Link>
      </li>
    );
  }
  return <>{returnItem}</>;
};

const mapDispatchToProps = (dispatch) => ({
  updateUser: (username) => dispatch(updateUser(username)),
});

export default connect(null, mapDispatchToProps)(PaginatorListItem);
