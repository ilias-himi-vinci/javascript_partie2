interface filmProps{
    film : string;
}

const PageTitle = ({ film } : filmProps) => {

    return(
          <div>
              <h1>
                 {film}
              </h1>
          </div>
    )
}


export default PageTitle;