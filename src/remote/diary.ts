import { addDiaryProps, ImageUploadProps } from '@models/addDiary'
import axios from 'axios'
import { getCookie } from '@utils/cookieController'

export const crateAiDiary = async (diaryDate: addDiaryProps) => {
    try {
        const imgRequest: ImageUploadProps = {
            username: getCookie('username') || '',
            date: diaryDate.ymd || '',
            filename: diaryDate.image.name,
        }

        //s3이미지 url을 리턴하는 함수
        const s3imageUrl = await getS3ImageUrl(imgRequest)

        console.log(imgRequest)

        await putImageToS3(s3imageUrl, diaryDate)

        const hashtags: string = diaryDate.keyword
            ?.map((item) => `#${item}`)
            .join(',')

        const diaryRequest = {
            ymd: diaryDate.ymd,
            moods: diaryDate.moods,
            hashtags: hashtags,
            images: [diaryDate.image?.name || ''],
        }

        console.log(diaryRequest)

        // const diaryResponse = await axios.post(
        //     'https://www.kirolog.com/api/diaries/ai/',
        //     diaryRequest,
        //     {
        //         headers: {
        //             Authorization: `Bearer ${getCookie('accessToken')}`,
        //             'Content-Type': 'application/json',
        //         },
        //     },
        // )
        // console.log(diaryResponse)

        // return
        // return response.data
    } catch (e) {
        if (axios.isAxiosError(e)) {
            alert('데이터를 요청하는중 에러가 발생하였습니다.')
        } else {
            // 기타 에러 처리
            alert('예상치 못한 오류가 발생했습니다.')
            console.error(e)
        }

        throw e
    }
}

export const crateMyDiary = async (diaryDate: addDiaryProps) => {
    try {
        const reqData = {
            ymd: diaryDate.ymd,
            moods: diaryDate.moods,
            content: diaryDate.content,
            images: [diaryDate.image?.name || ''],
        }

        const response = await axios.post(
            'https://www.kirolog.com/api/diaries/',
            reqData,
            {
                headers: {
                    Authorization: `Bearer ${getCookie('accessToken')}`,
                    'Content-Type': 'application/json',
                },
            },
        )

        return response.data
    } catch (e) {
        if (axios.isAxiosError(e)) {
            alert('데이터를 요청하는중 에러가 발생하였습니다.')
        } else {
            // 기타 에러 처리
            alert('예상치 못한 오류가 발생했습니다.')
            console.error(e)
        }

        throw e
    }
}

export const getDiary = async () => {
    const response = await axios.get(
        'http://ptday412-alb-1374488828.ap-northeast-2.elb.amazonaws.com/api/diaries/',
        {
            headers: {
                Authorization: `Bearer ${getCookie('accessToken')}`,
            },
        },
    )

    return response.data
}

//이미지를 올릴 S3의 저장소 url을 리턴받는 api
const getS3ImageUrl = async (reqBody: ImageUploadProps): Promise<string> => {
    const imageResponse = await axios.post(
        'https://dezbobv0gh.execute-api.ap-northeast-2.amazonaws.com/1221/',
        reqBody,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    )

    return imageResponse.data.presignedUrl
}

//S3에 이미지 업로드하는 함수
const putImageToS3 = async (
    imgUrl: string,
    diaryDate: addDiaryProps,
): Promise<void> => {
    const uploadImage = await axios.put(imgUrl, diaryDate.image, {
        headers: {
            'Content-Type': diaryDate.image.type as string,
        },
    })
}
