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

               <table>
                   <tr>
                       <th>Name</th>
                       <th>Marks</th>
                       <th>Name</th>
                       <th>Marks</th>
                   </tr>
                   <tr>
                       <th>Rahul Chhoker</th>
                       <th>39</th>
                       <th>Sushree Ray</th>
                       <th>39</th>
                   </tr>
                   <tr>
                       <th>Tushar Tikshananshu</th>
                       <th>37</th>
                       <th>Siddharth Agarwal</th>
                       <th>37</th>
                   </tr>
                   <tr>
                       <th>Amit Chauhan</th>
                       <th>36</th>
                       <th>Gyandeep Kumar Kushwaha</th>
                       <th>36</th>
                   </tr>
                   <tr>
                       <th>Manish Kumar</th>
                       <th>35</th>
                       <th>Niket Sharma</th>
                       <th>35</th>
                   </tr>
                   <tr>
                       <th>Harshu Saini</th>
                       <th>34</th>
                       <th>Rama Murthy</th>
                       <th>34</th>
                   </tr>
</table>
            </Container>
        </div>
  );
};

export default BSTC;
