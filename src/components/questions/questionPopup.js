import React, {PropTypes} from 'react';

class QuestionPopup extends React.Component {
    render(){
    return (
          <div className="modal fade" id="reviewModel" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog modelReviewAuthentication" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="row">
                    <form className="modalForm">
                      <div className="col-md-12">
                        <h3>Ask a Question</h3>
                        <p>Ask a question to the community and get the best travel tips from people that have been there.</p>
                      </div>
                      <div className="col-md-12">
                          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon input-icon-hightlight"></i>
                              <input className="form-control" placeholder="Enter Place" type="text" value={this.props.name} />
                          </div>
                        <div className="form-group">
                            <label>Question</label>
                            <textarea className="form-control" rows="6"></textarea>
                        </div>
                      </div>
                      <div className="col-md-12 text-xs-center">
                          <input className="btn btn-primary" type="submit" value="Ask Question" />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="modal-footer text-xs-center">
                  <a href="#" data-dismiss="modal">Close</a>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

QuestionPopup.defaultProps = {
id: '',
    name: ''
};

QuestionPopup.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string
};

export default QuestionPopup;