import React from 'react';
import AlbumList from './component/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList =[
        {
            id : 1 ,
            name: 'Nhac Hoa',
            thumbnaiUrl:'https://images.search.yahoo.com/images/view;_ylt=Awr9JhXydyhiypoApbOJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2U3ZjQzNDVkNDlkYzI4NDRhMGRkMjViYzhjM2M0Y2QyBGdwb3MDMTYEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Danhr%2Bddpej%26type%3DE210US714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D16&w=1280&h=720&imgurl=anhnendep.net%2Fwp-content%2Fuploads%2F2016%2F07%2Fanh-dep-thien-nhien-the-gioi-01.jpg&rurl=http%3A%2F%2Fanhnendep.net%2Fanh-dep-thien-nhien-the-gioi%2F&size=872.8KB&p=anhr+ddpej&oid=e7f4345d49dc2844a0dd25bc8c3c4cd2&fr2=piv-web&fr=mcafee&tt=%E1%BA%A2nh+%C4%91%E1%BA%B9p+thi%C3%AAn+nhi%C3%AAn+th%E1%BA%BF+gi%E1%BB%9Bi&b=0&ni=21&no=16&ts=&tab=organic&sigr=pevDMnHWRzsL&sigb=JacAVQLWvONN&sigi=LTCqlBRBu0LE&sigt=QdJisZii6xW5&.crumb=K1I7a.mHvSm&fr=mcafee&fr2=piv-web&type=E210US714G0'
        },
        {
            id : 2 ,
            name: 'Nhac Viet',
            thumbnaiUrl:'https://images.search.yahoo.com/images/view;_ylt=Awr9JhXydyhiypoAprOJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2ZmMmI0MjYwOGY2YzUyMmQ1MDlkYjBhNmNhNDJkYjc4BGdwb3MDMTcEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Danhr%2Bddpej%26type%3DE210US714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D17&w=1600&h=1000&imgurl=4.bp.blogspot.com%2F-zHNxAbmviks%2FUhdvwXwZyOI%2FAAAAAAAAEPY%2FfM3YrhdLH4c%2Fs1600%2Fhinh-nen-dep-nhat%2B%282%29.jpg&rurl=http%3A%2F%2Fanhdep123.blogspot.com%2F2013%2F08%2Fhinh-nen-dep-nhat.html&size=427.9KB&p=anhr+ddpej&oid=ff2b42608f6c522d509db0a6ca42db78&fr2=piv-web&fr=mcafee&tt=%E1%BA%A2NH+%C4%90%E1%BA%B8P+%7C+ANH+DEP%3A+H%C3%ACnh+n%E1%BB%81n+%C4%91%E1%BA%B9p+nh%E1%BA%A5t&b=0&ni=21&no=17&ts=&tab=organic&sigr=ga6ZqrSR8MBE&sigb=At8s5vTAF9fy&sigi=kGZKxj5DkaKK&sigt=_9YPNG8vG8os&.crumb=K1I7a.mHvSm&fr=mcafee&fr2=piv-web&type=E210US714G0'
        },
        {
            id : 3 ,
            name: 'Nhac Us/uk',
            thumbnaiUrl:'https://images.search.yahoo.com/images/view;_ylt=Awr9JhXydyhiypoAqrOJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzA4MGU4ZTQ4NGI4YWE0MjEwNThmNWYzZjI0ZDQ5ZWQ4BGdwb3MDMjEEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Danhr%2Bddpej%26type%3DE210US714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D21&w=1600&h=1000&imgurl=4.bp.blogspot.com%2F-7yl0bnFz0i0%2FUkQCBriBnJI%2FAAAAAAAAAiA%2FtceMEfJHskk%2Fs1600%2Fanh-dep-hinh-nen-thien-nhien-7.jpg&rurl=https%3A%2F%2Fanhdepkhongthoigian.blogspot.com%2F2013%2F09%2Fanh-ep-lam-hinh-nen-thien-nhien-nhung.html&size=430.5KB&p=anhr+ddpej&oid=080e8e484b8aa421058f5f3f24d49ed8&fr2=piv-web&fr=mcafee&tt=%E1%BA%A2nh+%C4%91%E1%BA%B9p+l%C3%A0m+h%C3%ACnh+n%E1%BB%81n+thi%C3%AAn+nhi%C3%AAn+%26quot%3B+nh%E1%BB%AFng+con+%C4%91%C6%B0%E1%BB%9Dng+t%C6%A1+l%E1%BB%A5a%26quot%3B+-+%E1%BA%A2nh+%C4%90%E1%BA%B9p+Kh%C3%B4ng+Th%E1%BB%9Di+Gian&b=0&ni=21&no=21&ts=&tab=organic&sigr=0HAr.dBWKjXa&sigb=x9SRe1ecunMi&sigi=1xVaW1dmz8t5&sigt=rYCIMBqWAAm2&.crumb=K1I7a.mHvSm&fr=mcafee&fr2=piv-web&type=E210US714G0'
        },
    ]
    return (
        <div>
            <h2>Album list</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;