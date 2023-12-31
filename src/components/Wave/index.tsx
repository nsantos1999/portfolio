import { WaveSvg } from "./styles";

export interface WaveProps {
  color?: string;
}

export function Wave({ color = "#0099ff" }: WaveProps) {
  return (
    <WaveSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        // fill={color}
        fill-opacity="1"
        d="M0,128L21.8,122.7C43.6,117,87,107,131,101.3C174.5,96,218,96,262,80C305.5,64,349,32,393,48C436.4,64,480,128,524,165.3C567.3,203,611,213,655,229.3C698.2,245,742,267,785,256C829.1,245,873,203,916,176C960,149,1004,139,1047,160C1090.9,181,1135,235,1178,250.7C1221.8,267,1265,245,1309,245.3C1352.7,245,1396,267,1418,277.3L1440,288L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
      ></path>
    </WaveSvg>
  );
}

export function InverseWave() {
  return (
    <WaveSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        // fill="#0099ff"
        fill-opacity="1"
        d="M0,256L21.8,224C43.6,192,87,128,131,128C174.5,128,218,192,262,234.7C305.5,277,349,299,393,282.7C436.4,267,480,213,524,176C567.3,139,611,117,655,96C698.2,75,742,53,785,80C829.1,107,873,181,916,202.7C960,224,1004,192,1047,176C1090.9,160,1135,160,1178,176C1221.8,192,1265,224,1309,218.7C1352.7,213,1396,171,1418,149.3L1440,128L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
      ></path>
    </WaveSvg>
  );
}
