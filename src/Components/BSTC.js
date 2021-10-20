import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Styles/BSTC.css";
const BSTC = () => {
  return (
    <div id="BSTC" className='bstc'> 
            <h1 className='bstc-head'>Babel Software Testing Certification Champions</h1>
            <h3 className='bstc-intro'>There are always new, grander challenges to confront, and a true winner will embrace each one.</h3>
            <Container>
               <h1 className='bstc-name'>August</h1>

               <table className="bstc-table">
                   <tr>
                       <th>Name</th>
                       <th>Marks</th>
                       <th>Name</th>
                       <th>Marks</th>
                   </tr>
                   <tr>
                       <th>Suraj Bisht</th>
                       <th>39</th>
                       <th>Tushar Sharma</th>
                       <th>38</th>
                   </tr>
                   <tr>
                       <th>Shashank Singh </th>
                       <th>36</th>
                       <th>Amit Mudgal</th>
                       <th>34</th>
                   </tr>
                   <tr>
                       <th>Rohit Kumar</th>
                       <th>33</th>
                       <th>Jitendra Choudhary</th>
                       <th>32</th>
                   </tr>
                   <tr>
                       <th>Vivek Kumar</th>
                       <th>32</th>
                   </tr>
</table>
            </Container>
        </div>
  );
};

export default BSTC;
