import React from "react";
import PropTypes from "prop-types";

function Movie(){
    return <h1></h1>;
}

Movie.propTypes={
    id:PropTypes.number.isRequired
};

export default Movie;