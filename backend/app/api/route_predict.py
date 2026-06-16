from fastapi import APIRouter , Depends , Request
from pydantic import BaseModel
from app.services.model_service import get_disease
from app.core.dependency import get_current_user


router = APIRouter()


class Input(BaseModel):
    symptoms1 : str
    symptoms2 : str
    symptoms3 : str
    symptoms4 : str

@router.post('/predict')
def predict_disease(request :Request , data : Input , user = Depends(get_current_user)):
    model = request.app.state.model
    output = get_disease(data.model_dump() , model)
    return output




