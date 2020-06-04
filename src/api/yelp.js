import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: 'Bearer fIAnA5n4In2bZeioimqx4S5E5_egZhQSpdoB--28AS2yN_JroZlnlP9jpL2hcSpgKsAcnI2A60NyfWqObGVCJnioKM9_BIEShRwqWfm0PyWWlFlWaYWhbYTmUTjXXnYx'
    }
});