import React from 'react';
import {Link} from 'react-router';
import Search from '../../components/sidebarSearch';
import SideNavigation from '../../components/sidebarNavigation';
import PopularPosts from '../../components/popularPosts';
import Comments from '../../components/recentComments';
import TwitterFeed from '../../components/twitterFeed';
import FacebookFeed from '../../components/facebookFeed';
// Since this component is simple and static, there's no parent container for it.
export default class TermsPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
    return (

        <div className="container">
          <div className="container">
            <h1 className="page-title">Terms</h1>
          </div>

          <div className="container">
              <div className="row">
                  <div className="col-md-9">
                      <h3>Mus mus tempor aliquam tincidunt posuere semper a dui sapien</h3>
                      <p>Proin dis tellus eu praesent sodales posuere cum hendrerit penatibus arcu sollicitudin rhoncus tellus rutrum hendrerit mauris dictumst duis cursus potenti sit dolor dolor vehicula mauris bibendum venenatis faucibus lobortis porttitor interdum inceptos inceptos integer ac fames molestie aliquet primis nullam netus varius amet libero risus velit ultrices iaculis sit laoreet sit magna vel duis primis inceptos tempor ornare class dictum sem nam tortor lectus lorem felis non et class purus dignissim eros id dignissim consectetur massa nam mattis habitant nisl gravida aliquam hendrerit orci vel non conubia duis congue netus condimentum lacinia aenean scelerisque est suspendisse lacus nisi bibendum non mi senectus mi et aptent senectus arcu varius dui laoreet parturient donec proin ac risus dapibus sit id inceptos justo duis tristique viverra amet consequat ipsum massa parturient erat erat laoreet fermentum sodales etiam proin pellentesque nisi sit tempor purus purus proin sociis dictumst vulputate habitasse at auctor nec metus montes volutpat dolor nibh pulvinar amet blandit inceptos nullam semper velit euismod pellentesque ipsum aenean congue senectus justo ad dolor natoque urna cum interdum tincidunt mollis cras auctor eget habitant dolor amet nascetur varius arcu pellentesque himenaeos ipsum urna quisque nostra hac molestie porttitor quisque tempor blandit felis rutrum</p>
                      <h4>Mus felis velit cubilia magna lacus ligula semper</h4>
                      <p>Et curabitur dapibus est vulputate porta ut litora eros sagittis commodo tempus curae ornare malesuada luctus etiam viverra maecenas proin potenti aenean tortor nostra at maecenas bibendum netus justo neque tempus nostra iaculis aliquet orci dictum adipiscing auctor dolor eleifend venenatis inceptos ullamcorper eros etiam elementum non egestas nascetur felis orci netus urna sociosqu suscipit feugiat vel molestie netus turpis primis nostra placerat facilisi suscipit sed magna vestibulum lacinia fermentum sollicitudin tempus aliquam tempus condimentum mauris ridiculus posuere commodo sociosqu eleifend mauris dictum faucibus mauris metus dictumst turpis dui libero litora commodo interdum metus suspendisse sollicitudin posuere leo potenti nunc</p>
                      <p>Dolor leo taciti interdum luctus elementum per parturient orci ante venenatis fringilla etiam nibh blandit ullamcorper luctus blandit torquent himenaeos sollicitudin enim praesent dapibus lobortis facilisis interdum etiam varius velit</p>
                      <h3>Fames dapibus habitasse leo eros</h3>
                      <p>Sed fames lorem non pellentesque tincidunt est dis porta porta montes himenaeos imperdiet senectus metus vitae posuere suspendisse ultrices gravida consectetur tristique velit fringilla neque montes habitant etiam neque tempus felis aenean augue malesuada neque ultricies mollis massa hac sem ut maecenas himenaeos aenean pulvinar molestie sociis lacus ullamcorper elit lobortis habitant ut posuere maecenas nunc quisque metus nostra nullam tellus rutrum at diam egestas augue nascetur nostra facilisi malesuada feugiat scelerisque aptent parturient augue at vestibulum nulla adipiscing eros a ac tincidunt pretium nullam torquent torquent fames semper tempor quam habitant aliquam aptent platea platea elit adipiscing lacinia phasellus urna tellus diam curae amet dis parturient lorem at blandit bibendum lobortis venenatis cras dictum luctus dis leo dapibus hac purus non rhoncus leo auctor posuere dignissim neque cubilia habitant curae consequat laoreet nulla torquent tortor turpis consectetur condimentum erat amet ultricies ad amet sapien ornare habitasse nisl orci id feugiat rutrum morbi potenti pellentesque ullamcorper viverra proin nascetur suscipit ullamcorper amet rhoncus ut semper pulvinar maecenas accumsan parturient integer lacus justo torquent cras sociis a massa molestie inceptos congue venenatis platea hac neque egestas dignissim lacinia quisque ridiculus cras semper magnis nascetur consequat enim conubia auctor eleifend vel magnis</p>
                      <p>Est auctor nunc vel nulla primis mauris fringilla blandit sapien fermentum volutpat curabitur himenaeos eros quis risus amet arcu viverra laoreet ullamcorper ut mauris blandit nascetur non platea donec condimentum facilisi hac quisque consectetur posuere suspendisse duis platea augue aliquet morbi lacus consectetur elementum egestas lacus amet fames donec et nec neque vitae at ut turpis maecenas in sodales nunc dui habitant mattis nisi conubia mi penatibus cum porta aenean mauris consequat tincidunt lectus sagittis tellus dapibus suspendisse porta eget mattis tempus vestibulum mus imperdiet nibh sem pharetra quis netus vel vehicula class vestibulum nisl donec hendrerit fermentum magna sed amet purus sit nec class sit fringilla tellus volutpat per eget molestie platea suspendisse eget tortor pharetra magna nam senectus tristique cursus ut odio sollicitudin venenatis natoque dis maecenas magna dignissim sociosqu et sociis accumsan interdum dictum netus quis enim phasellus suscipit nunc donec purus dui himenaeos nulla sociosqu rhoncus dictumst fusce ultricies congue sapien porttitor maecenas fringilla ipsum nam lorem aliquam rhoncus elit himenaeos facilisis auctor nostra cubilia pretium ante a enim interdum ullamcorper erat pharetra varius imperdiet praesent tempor justo placerat eleifend senectus laoreet mi cubilia volutpat augue convallis facilisi gravida vehicula duis aliquam habitant cras accumsan dis</p>
                      <p>Vitae eleifend duis convallis porta gravida auctor phasellus luctus ante et dignissim sagittis leo aptent malesuada nibh convallis cras velit himenaeos dis pretium interdum bibendum elementum morbi dignissim dis habitant senectus curabitur placerat consequat est nunc ad ornare commodo luctus curabitur mi aliquet aliquam nec sollicitudin fames cubilia elit donec nostra cum nullam porta dignissim tortor porta turpis quam pretium ultricies varius massa maecenas et id dictumst mattis donec fringilla ac parturient posuere id phasellus erat elementum nullam lacus cursus rhoncus parturient vitae praesent quisque nascetur molestie quis dignissim vel sit odio metus tristique auctor dictumst primis ad viverra quisque etiam in rutrum donec cras non dis suscipit risus ridiculus lacus mus cursus luctus donec pellentesque rhoncus sem quam vulputate mus hendrerit risus ultrices a elementum massa est at aenean parturient in egestas senectus lectus convallis lectus dui neque sit dignissim facilisis fames feugiat laoreet pharetra felis vitae ornare lacus sodales non sapien curae nisl nec habitant velit semper pretium et ipsum dolor in amet nunc vestibulum lacus nulla dis sollicitudin diam luctus dolor ante lobortis neque enim facilisis penatibus integer lacinia semper nibh ullamcorper feugiat faucibus non nec amet ac mus hac diam nulla ridiculus proin sem iaculis condimentum</p>
                      <h3>Pharetra morbi volutpat torquent orci</h3>
                      <p>Luctus pharetra volutpat nisl dis curae primis aliquet sapien pellentesque velit tristique taciti tincidunt adipiscing pharetra massa at quisque fermentum faucibus ultrices mi fames himenaeos pellentesque curabitur nisl etiam a volutpat phasellus convallis diam tempus malesuada mauris torquent dapibus montes mollis iaculis porta ridiculus rutrum fusce sed parturient habitant a gravida curabitur senectus blandit parturient quam fames sem nec interdum id torquent litora nibh curae morbi cum etiam duis malesuada viverra ultricies pellentesque vestibulum sed mattis augue penatibus venenatis malesuada nam semper facilisis taciti posuere convallis curae auctor non sodales iaculis blandit taciti pellentesque faucibus id nam scelerisque sapien ultricies euismod viverra diam dictum curabitur laoreet facilisi conubia purus taciti malesuada eget cum malesuada nunc libero vestibulum aptent aliquam eros facilisi purus mus odio praesent facilisi molestie amet fringilla ultricies sem leo pulvinar gravida pulvinar felis adipiscing risus curae nulla rutrum vehicula interdum sit consectetur arcu fusce turpis nisl sollicitudin euismod fringilla habitant mi condimentum at vehicula sem conubia neque maecenas ultrices donec sodales nam nec phasellus fermentum et vulputate in viverra dolor tortor platea fames libero malesuada justo elit nostra metus ullamcorper etiam rutrum dictum aenean himenaeos morbi dolor commodo vulputate accumsan sapien vitae consectetur quisque placerat vulputate dolor torquent blandit ac eget vulputate pretium habitant parturient cursus sem tempor ligula a at ultrices commodo nibh potenti feugiat morbi molestie litora leo eu ullamcorper montes consectetur eros fringilla per placerat velit tincidunt aptent vulputate gravida curae lacinia imperdiet tempus erat vulputate posuere mollis quisque magna facilisi sagittis ridiculus consequat</p>
                  </div>
                  <div className="col-md-3">
                      <aside className="sidebar-right">
                          
                        <Search />

                          <SideNavigation />

                          <PopularPosts />

                          <Comments />

                          <TwitterFeed />

                          <FacebookFeed />

                      </aside>
                  </div>
              </div>
          </div>

              <div className="gap"></div>
        </div>
      )};
};
