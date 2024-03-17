
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../ReaduxToolkit/Hooks'
import { setCreatedData } from '../../../../ReaduxToolkit/Reducer/ProjectSlice'
import { Form, Formik } from 'formik'
import { PROJECT_INITIALVALUE, PROJECT_VALIDATION } from '../../../../Data/Apps/Project/ProjectListData'
import TitleAndClentSection from './TitleAndClentSection'
import ProjectSection from './ProjectSection'
import DateSection from './DateSection'
import DescriptionSection from './DescriptionSection'
import UploadProjectFile from './UploadProjectFile'
import ButtonSection from './ButtonSection'

const CreateNewProjectForm = () => {
  const navigate = useNavigate();
  const { createdFormData } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();
  const randomValue = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

  const projectSubmit = (values: any) => {
    const submitedData = {
      id: randomValue.toString(),
      title: values.title,
      badge: values.progress === 100 ? "Done" : "Doing",
      image: "3.jpg",
      sites: "Themeforest, australia",
      description: "Boho Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: randomValue.toString(),
      resolved: randomValue.toString(),
      comment: randomValue.toString(),
      like: randomValue.toString(),
      customers_img1: "3.jpg",
      customers_img2: "5.jpg",
      customers_img3: "1.jpg",
      progress:(values.progress),
      projectLevel:values.progress
    };
    dispatch(setCreatedData([...createdFormData, submitedData]));
    navigate(`${process.env.PUBLIC_URL}/apps/project/projectlist`);
  };
  return (
    <Formik initialValues={PROJECT_INITIALVALUE} validationSchema={PROJECT_VALIDATION} onSubmit={projectSubmit}>
      {() => (
        <Form className="theme-form">
          <TitleAndClentSection />
          <ProjectSection />
          <DateSection />
          <DescriptionSection />
          <UploadProjectFile/>
          <ButtonSection />
        </Form>
      )}
    </Formik>

  )
}

export default CreateNewProjectForm