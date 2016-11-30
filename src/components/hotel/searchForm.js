import React from "react";

export default class SearchForm extends React.Component {
    render(){
    return (
        <form className="hotelSearch">
            <div className="row">
                <div className="col-md-6">
                    <div className="input-daterange" data-date-format="MM d, D">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                                    <label>Check in</label>
                                    <input className="form-control" name="start" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                                    <label>Check out</label>
                                    <input className="form-control" name="end" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group form-group- form-group-select-plus">
                                <label>Guests</label>
                                <div className="btn-group btn-group-select-num" data-toggle="buttons">
                                    <label className="btn btn-primary">
                                        <input type="radio" name="options" />1</label>
                                    <label className="btn btn-primary active">
                                        <input type="radio" name="options" />2</label>
                                    <label className="btn btn-primary">
                                        <input type="radio" name="options" />3</label>
                                    <label className="btn btn-primary">
                                        <input type="radio" name="options" />4</label>
                                    <label className="btn btn-primary">
                                        <input type="radio" name="options" />4+</label>
                                </div>
                                <select className="form-control hidden">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option selected="selected">5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-select-plus">
                                <label>Rooms</label>
                                <div className="btn-group btn-group-select-num" data-toggle="buttons">
                                    <label className="btn btn-primary active">
                                        <input type="radio" name="options" />1</label>
                                    <label className="btn btn-primary">
                                        <input type="radio" name="options" />2</label>
                                    <label className="btn btn-primary">
                                        <input type="radio" name="options" />3</label>
                                    <label className="btn btn-primary">
                                        <input type="radio" name="options" />4</label>
                                    <label className="btn btn-primary">
                                        <input type="radio" name="options" />4+</label>
                                </div>
                                <select className="form-control hidden">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option selected="selected">5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input className="btn btn-primary mt10" type="submit" value="Search for Hotels" />
        </form>
        );
    }
}