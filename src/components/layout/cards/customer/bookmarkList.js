import React, {PropTypes} from 'react';
import ReviewIcon from '../../../layout/location/reviewIcon';
import PhotoIcon from '../../../layout/location/photoIcon';
import BookmarkIcon from '../../../layout/location/bookmarkIcon';
import Loader from '../../../loaders/contentLoader';

const BookmarkList = ({bookmarks, loadingBookmarks, i, handleMissingImage}) => {
  if (!loadingBookmarks)
  {
    return (
      <div className="row">
        {
          bookmarks.map(bookmark => {

            i += 1;

            let spacer = '';

            switch (i)
            {
              case 3:
              case 6:
              case 9:
              case 12:
              case 15:
              case 18:
              case 21:
              case 24:
                spacer = <div className="gap gap-small"></div>;
                break;
            }

            let locationType = bookmark.subClass;

            switch (bookmark.subClass)
            {
              case "tree":
                locationType = 'Park / Common';
                break;
              case "sign":
                locationType = 'Area of Interest';
                break;
              case "civic":
                locationType = 'Important Buildings';
                break;
              case "anchor":
                locationType = 'Docklands';
                break;
              case "icecream":
                locationType = 'Activities';
                break;
              case "stadium":
                locationType = 'Sport Venues';
                break;
              case "medical":
                locationType = 'Hospitals, Medical Buildings';
                break;
              case "school":
                locationType = 'Schools, Colleages, Universities';
                break;
              case "theater":
                locationType = 'Theatres';
                break;
              case "historic":
                locationType = 'Historic Venues';
                break;
            }

            return (
              <div className="col-md-4" key={bookmark.regionID}>
                <a className="hover-img" href={bookmark.url}>
                  <img src={bookmark.image} alt={bookmark.locationName} onError={handleMissingImage}/>
                  <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-hold">
                    <div className="text-small">
                      <h5>{bookmark.regionName}</h5>
                      <p>{locationType}</p>
                    </div>
                    <ul className="hover-icon-group-bottom-right">
                      <li>
                        <ReviewIcon locationId={bookmark.regionID} locationName={bookmark.regionNameLong} locationType={locationType} key={bookmark.regionID}/>
                      </li>
                      <li>
                        <PhotoIcon locationId={bookmark.regionID} locationName={bookmark.regionNameLong} locationType={locationType} key={bookmark.regionID}/>
                      </li>
                      <li>
                        <BookmarkIcon locationId={bookmark.regionID} locationUrl={bookmark.url}  locationImage={bookmark.image} locationName={bookmark.regionName} locationNameLong={bookmark.regionNameLong} locationType={locationType} key={bookmark.regionID} removeBookmark={true}/>
                      </li>
                    </ul>
                  </div>
                </a>
                {spacer}
              </div>
            );
          })
        }
      </div>
    );
  }
  else {
    return (<Loader showLoader={true} />);
  }
};

BookmarkList.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  loadingBookmarks: PropTypes.bool.isRequired,
  i: PropTypes.number.isRequired,
  handleMissingImage: PropTypes.func.isRequired,
  updateBookmarks: PropTypes.func.isRequired
};

export default BookmarkList;
