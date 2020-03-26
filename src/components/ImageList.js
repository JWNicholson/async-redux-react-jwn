import React from 'react'
import { connect } from 'react-redux';
// import { getImages } from '../actions/imgActions';
import { getImages } from '../actions/imgActions';
import { Button, Container, Card, CardBody, Row } from 'reactstrap';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
   margin:24px auto;
`;

const CardWrapper = styled.div`
    margin:8px;
    -webkit-box-shadow: 1px 1px 5px 0px rgba(50, 50, 50, 0.75);
    -moz-box-shadow:    1px 1px 5px 0px rgba(50, 50, 50, 0.75);
    box-shadow:         1px 1px 5px 0px rgba(50, 50, 50, 0.75);
`;

const ImageListHeader = styled.div`
    color:aliceblue;
    margin-top:0;
    padding:14px;
    background-color: teal;
    -webkit-box-shadow: 1px 1px 2px 0px rgba(50, 50, 50, 0.75);
    -moz-box-shadow:    1px 1px 2px 0px rgba(50, 50, 50, 0.75);
    box-shadow:         1px 1px 2px 0px rgba(50, 50, 50, 0.75);
`;

function ImageList(props) {

    const handleGetDogs = e => {
        e.preventDefault();
        props.getImages();
    };

    return (
        <>
        <ImageListHeader>
        <div>
            <h1>Everyone Loves Dogs</h1>
        </div>
        </ImageListHeader>
       
        {props.isFetchingData ? (
        <div>Looking for dogs....</div>
      ) : (
          <ButtonWrapper>
        <Button color="primary" onClick={handleGetDogs}>Call the dogs</Button>
        </ButtonWrapper>
      )}
        <Container>
        <Row xs="1" sm="2" md="4">
        {props.data.map(image => (
            <div>
                <CardWrapper>
                <Card>
                    <CardBody>
                <img width="90%" className="dogImg" key={image} src={image} />
                </CardBody>
                </Card>
                </CardWrapper>
            </div>
        ))}
        </Row>
</Container>

        {props.error && <p className="error">{props.error}</p>} 
        </>
    );
}

const mapStateToPRops = state => ({
    data: state.data,
    error: state.error,
    isFetchingData: state.isFetchingData
});

export default connect (
    mapStateToPRops,
    { getImages }
)(ImageList);