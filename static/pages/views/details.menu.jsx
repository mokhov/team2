/** @jsx React.DOM */
var DetailsMenu = React.createClass({
    render: function() {
        return (
            <div>
                <div className="tabs">
                    <button className="tabs__item">кратко</button>
                    <button className="tabs__item tabs__item_active">подробно</button>
                    <button className="tabs__item">наглядно</button>
                </div>
            </div>
        );
    }
});

module.exports = DetailsMenu;
