import Arrow from '../../assets/arrow.svg';
import { usePreferencesContext } from '../../context/preferencesContext';

export const Details = ({ details, backupPressure }: any) => {
  const preferencesCtx = usePreferencesContext();
  const isMetric = preferencesCtx?.preferences.units === 'metric' ? true : false;
  const rotateDeg = Math.round(details.values.windDirection);

  return (
    <div className="bg-white/50 backdrop-blur-lg rounded-lg p-4 mt-4 shadow-sm select-none">
      <div className="text-slate-700 font-medium select-none">Details</div>
      <div className="grid grid-cols-1 xssmall:grid-cols-2  supasmall:grid-cols-3 small:grid-cols-4 sma:grid-cols-5 gap-y-2 mt-2 text-center">
        <div>
          <div className="text-sm text-slate-700">Precipitation</div>
          <div className="text-slate-900 ">
            {Math.round(details.values.precipitationIntensity)} {isMetric ? 'mm' : 'in'}
          </div>
        </div>
        <div>
          <div className="text-sm text-slate-700">Humidity</div>
          <div className="text-slate-900 ">{details.values.humidity} %</div>
        </div>
        <div>
          <div className="text-sm text-slate-700">Pressure</div>
          <div className="text-slate-900 ">
            {details.values.pressureSurfaceLevel
              ? Math.round(details.values.pressureSurfaceLevel)
              : Math.round(backupPressure)}
            {isMetric ? ' hPa' : ' inHg'}
          </div>
        </div>
        <div>
          <div className="text-sm text-slate-700">Visibility</div>
          <div className="text-slate-900 ">
            {Math.round(details.values.visibility)} {isMetric ? 'km' : 'mi'}
          </div>
        </div>
        <div>
          <div className="text-sm text-slate-700">Wind</div>
          <div className="text-slate-900 flex justify-center items-center">
            <Arrow style={{ transform: `rotate(${rotateDeg}deg)` }} className="h-3 mr-1" />
            {details.values.windSpeed} {isMetric ? 'm/s' : 'mph'}
          </div>
        </div>
      </div>
    </div>
  );
};
