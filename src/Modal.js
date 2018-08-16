import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import "./styles.css";

class AddMovieModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      rate: "",
      filmName: "",
      picture: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  changeRate = value => {
    this.setState({
      rate: value
    });
  };
  changeName = value => {
    this.setState({
      filmName: value
    });
  };
  changeImg = value => {
    this.setState({
      picture: value
    });
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  addMovieInto() {
    let newFilm = {
      rate: "",
      filmName: "",
      picture: ""
    };
  }
  render() {
    return (
      <div>
        <img
          className="add-movie-btn"
          src="https://cdn3.iconfinder.com/data/icons/symbol-color-documents-1/32/file_movie-add-512.png"
          onClick={this.toggle}
        />
        {this.props.buttonLabel}

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>add a Movie</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">stars</Label>
                <Input
                  onChange={e => this.changeRate(e.target.value)}
                  type="text"
                  name="stars"
                  id="Modal-stars"
                  placeholder="number of stars of the film"
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">Film name</Label>
                <Input
                  onChange={e => this.changeName(e.target.value)}
                  type="text"
                  name="name"
                  id="Modal-Name"
                  placeholder="enter the film name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Image adress</Label>
                <Input
                  onChange={e => this.changeImg(e.target.value)}
                  type="text"
                  name="image"
                  id="Modal-Image"
                  placeholder="https://..........jpg"
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.toggle();
                this.props.addMovieFunction(this.state);
              }}
            >
              Add a film
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMovieModal;
